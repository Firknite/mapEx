let users = [{
    "id": 1
    , "name": "user1"
    , "id_profile": 1
}, {
    "id": 2
    , "name": "user2"
    , "id_profile": 2
}]
let profiles = [{
    "id": 1,
    "name": "administrador"
}, {
    "id": 2,
    "name": "operator"
}]
var exit = []
users.map(user=>{
    profiles.map(profile=>{
        profile.id == user.id_profile ? exit.push({"user":user.name, "profile":profile.name}) : 0
    })
})
console.log(exit);
