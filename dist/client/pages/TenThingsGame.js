"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const tenthings_1 = require("../services/tenthings");
const users_1 = require("../services/users");
const AppContext_1 = require("../context/AppContext");
function TenThingsGame() {
    const { gameId } = (0, react_router_dom_1.useParams)();
    const { currentUser } = (0, AppContext_1.useApp)();
    const [game, setGame] = (0, react_1.useState)(null);
    const [users, setUsers] = (0, react_1.useState)([]);
    const [categories, setCategories] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const load = async () => {
            if (!currentUser?.admin || !gameId)
                return;
            const [usersData, cats, gameData] = await Promise.all([(0, users_1.getUsers)(), (0, tenthings_1.getCategories)(), (0, tenthings_1.getGame)(gameId)]);
            setUsers(usersData.filter((u) => !u.admin));
            setCategories(cats);
            setGame(gameData);
        };
        load();
    }, [currentUser, gameId]);
    const handleSetCategory = async (category) => {
        if (!gameId)
            return;
        const disabled = await (0, tenthings_1.updateGameCategory)(gameId, category);
        setGame((prev) => ({ ...prev, disabledCategories: disabled }));
    };
    if (!currentUser?.admin)
        return <h2 className="text-danger">Admin only</h2>;
    return (<div>
      <h1>Ten Things Game</h1>
      {game && (<>
          <h3>{game.list?.name}</h3>
          <h4>Categories</h4>
          {categories.map((cat) => (<button key={cat} onClick={() => handleSetCategory(cat)} className={`btn btn-sm ${game.disabledCategories?.includes(cat) ? "btn-danger" : "btn-default"}`} style={{ margin: 2 }}>
              {cat}
            </button>))}
        </>)}
    </div>);
}
exports.default = TenThingsGame;
//# sourceMappingURL=TenThingsGame.js.map