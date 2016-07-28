app.factory('WeaponsService', function () {
    var weapons = {};

    weapons.data = {
        "weapon001": {
            "defeated_by": {
                "id": "weapon002"
            },
            "defeats": {
                "id": "weapon003"
            },
            "description": "This is an A4 sheet of paper.",
            "icon": "fa-file",
            "id": "weapon001",
            "name": "Paper"
        }, "weapon002": {
            "defeated_by": {
                "id": "weapon003"
            },
            "defeats": {
                "id": "weapon001"
            },
            "description": "This is a pair of scissors.",
            "icon": "fa-scissors",
            "id": "weapon002",
            "name": "Scissors"
        }, "weapon003": {
            "defeated_by": {
                "id": "weapon001"
            },
            "defeats": {
                "id": "weapon002"
            },
            "description": "This is a rock.",
            "icon": "fa-hand-rock-o",
            "id": "weapon003",
            "name": "Rock"
        }
    };

    weapons.getData = function () {
        return this.data;
    };

    return weapons;
});