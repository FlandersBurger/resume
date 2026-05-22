import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  getLists, getList, createList, updateList, deleteList, mergeLists,
  getCategories, getLanguages, TenThingsList,
} from "../api/tenthings";
import { useApp } from "../context/AppContext";

export default function TenThings() {
  const { currentUser, toast } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();

  const [lists, setLists] = useState<TenThingsList[]>([]);
  const [selectedList, setSelectedList] = useState<TenThingsList | null>(null);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [highlightedIds, setHighlightedIds] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [languageFilter, setLanguageFilter] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [readOnly, setReadOnly] = useState(true);
  const [newItem, setNewItem] = useState({ value: "", blurb: "" });

  const loggedIn = !!currentUser;

  useEffect(() => {
    getCategories().then(setCategories);
    getLanguages().then(setLanguages);
  }, []);

  useEffect(() => {
    fetchLists(1);
    const listId = searchParams.get("list");
    if (listId && listId !== "new") {
      getList(listId).then((l) => {
        setSelectedList(l);
        setSelectedLanguage(l.language);
        setReadOnly(!currentUser || (!currentUser.admin && l.creator._id !== currentUser._id));
      });
    }
  }, [search, languageFilter, categoryFilter]);

  const fetchLists = async (p = 1) => {
    setLoading(true);
    try {
      const data = await getLists({ page: p, limit: 20, search, language: languageFilter, categories: categoryFilter });
      if (p === 1) setLists(data);
      else setLists((prev) => [...prev, ...data]);
      setPage(p);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectList = async (list: TenThingsList | null) => {
    if (!list) {
      setSelectedList(null);
      setSearchParams({});
      return;
    }
    try {
      const data = await getList(list._id);
      setSelectedList(data);
      setSelectedLanguage(data.language);
      setSearchParams({ list: data._id });
      setReadOnly(!currentUser || (!currentUser.admin && data.creator._id !== currentUser._id && !!data._id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddList = () => {
    if (!currentUser) return;
    setSelectedList({
      _id: "new", name: "", language: selectedLanguage,
      categories: [], answers: 0, isDynamic: true,
      creator: { _id: currentUser._id, username: currentUser.username },
      values: [],
    });
    setReadOnly(false);
    setSearchParams({ list: "new" });
  };

  const handleSaveList = async () => {
    if (!selectedList || !currentUser) return;
    try {
      if (selectedList._id === "new") {
        const created = await createList(currentUser._id, selectedList);
        setSelectedList(created);
        setSearchParams({ list: created._id });
        toast("List created");
      } else {
        const updated = await updateList(selectedList);
        setSelectedList(updated);
        toast("List saved");
      }
      fetchLists(1);
    } catch { toast("Failed to save list"); }
  };

  const handleDeleteHighlighted = async () => {
    if (!highlightedIds.length) return;
    for (const id of highlightedIds) await deleteList(id);
    setHighlightedIds([]);
    fetchLists(1);
    toast("Lists deleted");
  };

  const handleMerge = async () => {
    if (highlightedIds.length < 2) return;
    await mergeLists(highlightedIds);
    setHighlightedIds([]);
    fetchLists(1);
    toast("Lists merged");
  };

  const toggleHighlight = (id: string) => {
    setHighlightedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const addValue = () => {
    if (!newItem.value || !selectedList) return;
    setSelectedList({
      ...selectedList,
      values: [...selectedList.values, { _id: `tmp-${Date.now()}`, value: newItem.value, blurb: newItem.blurb }],
    });
    setNewItem({ value: "", blurb: "" });
  };

  return (
    <div id="tenthings-page" className="col-md-12">
      <h1>Ten Things</h1>
      {!loggedIn && <h1 className="text-danger">You have to be logged in to edit lists</h1>}

      {loggedIn && (
        <div className="btn-toolbar" style={{ marginBottom: 8 }}>
          <button className="btn btn-default" onClick={handleAddList} disabled={!!selectedList && !selectedList._id}>
            <i className="far fa-sparkles" /> New list
          </button>
          {currentUser?.admin && highlightedIds.length > 1 && (
            <>
              <button className="btn btn-info" onClick={handleMerge}>
                <i className="far fa-code-merge" /> Merge ({highlightedIds.length})
              </button>
              <button className="btn btn-danger" onClick={handleDeleteHighlighted}>
                <i className="fas fa-trash-alt" /> Delete ({highlightedIds.length})
              </button>
            </>
          )}
        </div>
      )}

      <div className="row">
        {/* List panel */}
        <div className={`col-md-${selectedList ? "4" : "12"}`}>
          <div className="input-group" style={{ marginBottom: 8 }}>
            <input
              className="form-control"
              placeholder="Search lists"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {lists.map((list) => (
            <div
              key={list._id}
              className={`list-group-item${highlightedIds.includes(list._id) ? " active" : ""}`}
              style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }}
            >
              <span onClick={() => handleSelectList(list)}>{list.name}</span>
              {currentUser?.admin && (
                <input type="checkbox" checked={highlightedIds.includes(list._id)}
                  onChange={() => toggleHighlight(list._id)} />
              )}
            </div>
          ))}
          {!loading && lists.length >= 20 && (
            <button className="btn btn-default btn-block" onClick={() => fetchLists(page + 1)}>
              Load more
            </button>
          )}
        </div>

        {/* Selected list editor */}
        {selectedList && (
          <div className="col-md-8">
            <button className="btn btn-default" onClick={() => handleSelectList(null)}>
              <i className="fa fa-times" /> Close
            </button>
            <h3>{selectedList.name || "New List"}</h3>
            {!readOnly && (
              <div>
                <div className="form-group">
                  <input className="form-control" placeholder="List name" value={selectedList.name}
                    onChange={(e) => setSelectedList({ ...selectedList, name: e.target.value })} />
                </div>
                <div className="form-inline" style={{ marginBottom: 8 }}>
                  <input className="form-control" placeholder="New value" value={newItem.value}
                    onChange={(e) => setNewItem({ ...newItem, value: e.target.value })} />
                  <input className="form-control" placeholder="Blurb" value={newItem.blurb}
                    onChange={(e) => setNewItem({ ...newItem, blurb: e.target.value })} />
                  <button className="btn btn-default" onClick={addValue}>Add</button>
                </div>
                <button className="btn btn-primary" onClick={handleSaveList}>Save</button>
              </div>
            )}
            <ul className="list-group" style={{ marginTop: 8 }}>
              {selectedList.values.map((v, i) => (
                <li key={v._id || i} className="list-group-item">
                  <strong>{v.value}</strong>
                  {v.blurb && <span className="text-muted"> — {v.blurb}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
