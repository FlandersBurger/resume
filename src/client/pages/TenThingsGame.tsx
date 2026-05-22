import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGame, updateGameCategory, getCategories } from "../api/tenthings";
import { getUsers } from "../api/users";
import { useApp } from "../context/AppContext";

export default function TenThingsGame() {
  const { gameId } = useParams<{ gameId: string }>();
  const { currentUser } = useApp();
  const [game, setGame] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      if (!currentUser?.admin || !gameId) return;
      const [usersData, cats, gameData] = await Promise.all([
        getUsers(),
        getCategories(),
        getGame(gameId),
      ]);
      setUsers(usersData.filter((u: any) => !u.admin));
      setCategories(cats);
      setGame(gameData);
    };
    load();
  }, [currentUser, gameId]);

  const handleSetCategory = async (category: string) => {
    if (!gameId) return;
    const disabled = await updateGameCategory(gameId, category);
    setGame((prev: any) => ({ ...prev, disabledCategories: disabled }));
  };

  if (!currentUser?.admin) return <h2 className="text-danger">Admin only</h2>;

  return (
    <div>
      <h1>Ten Things Game</h1>
      {game && (
        <>
          <h3>{game.list?.name}</h3>
          <h4>Categories</h4>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleSetCategory(cat)}
              className={`btn btn-sm ${game.disabledCategories?.includes(cat) ? "btn-danger" : "btn-default"}`}
              style={{ margin: 2 }}
            >
              {cat}
            </button>
          ))}
        </>
      )}
    </div>
  );
}
