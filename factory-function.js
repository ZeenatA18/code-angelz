module.exports = function jifunze_ffs(db) {

    async function addPlayer(name) {

        let players_name = name.charAt(0).toUpperCase() + name.slice(1);
        let regex = /^[a-z A-Z]+$/gi
        let results = await db.manyOrNone('SELECT first_name FROM kids_name where first_name = $1', [players_name])
        if (results.length == 0 && players_name !== "" && regex && regex.test(players_name)) {
            results = await db.manyOrNone("INSERT INTO kids_name(first_name) values ($1) ", [players_name])
        }
        return results
    }

    async function getPlayer(name){
        let result = await db.one("Select first_name from kids_name where name = $1", [name])
        console.log(result);
        return result

    }

    async function getLevels(){
        let result = await db.manyOrNone('Select * from levels');
        console.log(result);
        return result
    }

    return {
       addPlayer,
       getPlayer,
       getLevels
    }
}