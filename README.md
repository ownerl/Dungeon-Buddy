# Dungeon Buddy

Dungeon Buddy is a complementary web-app for dunegon masters to help plan out and keep track of events in their campaigns. Users can create campaigns, locations within them, and assign monster encounters to those locations.

## API

Dungeon Buddy will use the D&D 5e API to retrieve information on monsters.

Example:
```
const ROOT_URL = 'https://www.dnd5eapi.co'
fetch(`${ROOT_URL}/api/monsters/aboleth`)
```
Retrieves:
```
{
    "index": "aboleth",
    "name": "Aboleth",
    "size": "Large",
    "type": "aberration",
    "alignment": "lawful evil",
    ...
}
```

## Tech Required

- HTML/CSS
- JavaScript
- MongoDB
- Mongoose
- Node.js
- Express
- Passport

## Wireframes



## MVP Goal

- Thematically appropriate page design
- Log users in
- Creation of campaigns
- Creation of locations within campaigns
- Nesting locations within locations
- Removing locations from campaigns
- Removing locations from other locations
- Adding monsters to locations
- Removing monsters from locations
- Browse monsters from list / search for monsters
- Store campaigns/locations/monsters in database

## Stretch Goals

- Fluid access to information (reduce separate pages for information: cards, accordion, etc)
- Keep track of health for individual monster instances
- Add other encounters/events: friendly-npc? shopkeeper, innkeeper, etc
- Custom visuals for nav/buttons/etc

## Potential Roadblocks

- Organizing the data retrieved from the API
- Displaying data in an efficient manner
