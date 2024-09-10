"use strict";

// ----------------------------------------------------------------------------

let deathMessageColour = toColour(237, 67, 55, 255);

// ----------------------------------------------------------------------------

// This code will work for any named ped...
addEventHandler("OnPedWasted", function(event, ped, attacker, weapon, pedPiece) {
	if(ped.isType(ELEMENT_PLAYER)) {
		if(attacker) {
			if(attacker.isType(ELEMENT_PLAYER)) {
				message(`${attacker.name} killed ${ped.name} with ${weaponNames[server.game][weapon]}`, deathMessageColour);
			} else {
				message(`Something killed ${ped.name}`, deathMessageColour);
			}
		} else {
			message(`${ped.name} died}`, deathMessageColour);
		}
	}
});

let weaponNames = {
	[GAME_GTA_III]: [ // GTA III
		"Fist",
		"Bat",
		"Pistol",
		"Uzi",
		"Shotgun",
		"AK47",
		"M16",
		"Sniper Rifle",
		"Rocket Launcher",
		"Flamethrower",
		"Molotov",
		"Grenade"
	],
	[GAME_GTA_VC]: [ // GTA VC
		"Fist",
		"Brass Knuckles",
		"Screwdriver",
		"Golf Club",
		"Nitestick",
		"Knife",
		"Baseball Bat",
		"Hammer",
		"Meat Cleaver",
		"Machete",
		"Katana",
		"Chainsaw",
		"Grenade",
		"Remote Grenade",
		"Teargas",
		"Molotov Cocktail",
		"Missile",
		"Colt .45",
		"Python",
		"Shotgun",
		"Spaz Shotgun",
		"Stubby Shotgun",
		"Tec-9",
		"Uzi",
		"Ingram",
		"MP5",
		"M4",
		"Ruger",
		"Sniper Rifle",
		"Laser Sniper",
		"RPG",
		"Flame Thrower",
		"M60",
		"Minigun"
	],
	[GAME_GTA_SA]: [ // GTA San Andreas
		"Fist",
		"Brass Knuckles",
		"Golf Club",
		"Nightstick",
		"Knife",
		"Baseball Bat",
		"Shovel",
		"Pool Cue",
		"Katana",
		"Chainsaw",
		"Purple Dildo",
		"Dildo",
		"Vibrator",
		"Silver Vibrator",
		"Flowers",
		"Cane",
		"Grenade",
		"Teargas",
		"Molotov Cocktail",
		"Unknown",
		"Unknown",
		"Unknown",
		"9mm",
		"Silenced 9mm",
		"Desert Eagle",
		"Shotgun",
		"Sawnoff Shotgun",
		"Combat Shotgun",
		"Uzi",
		"MP5",
		"AK-47",
		"M4",
		"Tec-9",
		"Country Rifle",
		"Sniper Rifle",
		"RPG",
		"HS Rocket",
		"Flamethrower",
		"Minigun",
		"Satchel Charge",
		"Detonator",
		"Spraycan",
		"Fire Extinguisher",
		"Camera",
		"Night Vision Goggles",
		"Thermal Goggles",
		"Parachute",
		"Cellphone",
		"Jetpack",
		"Skateboard"
	],
	[GAME_GTA_IV]: [ // GTA IV
		"Fist",
		"Bat",
		"Pool Cue",
		"Knife",
		"Grenade",
		"Molotov",
		"Rocket",
		"Pistol",
		"UNUSED",
		"Desert Eagle",
		"Stubby Shotgun",
		"Baretta Shotgun",
		"Micro Uzi",
		"MP5",
		"AK-47",
		"M4",
		"Combat Sniper",
		"M40A1",
		"RPG",
		"Flamethrower",
		"Minigun",
		"EFLC Weapon 1",
		"EFLC Weapon 2",
		"EFLC Weapon 3",
		"EFLC Weapon 4",
		"EFLC Weapon 5",
		"EFLC Weapon 6",
		"EFLC Weapon 7",
		"EFLC Weapon 8",
		"EFLC Weapon 9",
		"EFLC Weapon 10",
		"EFLC Weapon 11",
		"EFLC Weapon 12",
		"EFLC Weapon 13",
		"EFLC Weapon 14",
		"EFLC Weapon 15",
		"EFLC Weapon 16",
		"EFLC Weapon 17",
		"EFLC Weapon 18",
		"EFLC Weapon 19",
		"EFLC Weapon 20",
		"EFLC Weapon 21",
		"EFLC Weapon 22",
		"EFLC Weapon 23",
		"EFLC Weapon 24",
		"Camera",
	],
	[GAME_MAFIA_ONE]: {	// Mafia 1
		2: "Knuckle Duster",
		3: "Knife",
		4: "Baseball Bat",
		5: "Molotov Cocktail",
		6: "Colt Detective Special",
		7: "S&W Model 27 Magnum",
		8: "S&W Model 10 M&P",
		9: "Colt 1911",
		10: "Thompson 1928",
		11: "Pump-action Shotgun",
		12: "Sawed-off Shotgun",
		13: "US Rifle, M1903 Springfield",
		14: "Mosin-Nagant 1891/30",
		15: "Grenade",
		17: "Bucket",
		20: "Steel Bar",
		25: "Crowbar",
		28: "Wooden Plank",
		29: "Bottle",
		31: "Sword",
		32: "Dogs Head",
	},
}