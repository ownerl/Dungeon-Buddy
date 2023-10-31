# Dungeon Buddy

Dungeon Buddy is a complementary web-app for dunegon masters to help plan out and keep track of events in their campaigns. Users can create campaigns, locations within them, and assign monster encounters to those locations.

## API

Dungeon Buddy will use the Open5e API to retrieve information on monsters.

Example:
```
const ROOT_URL = 'https://api.open5e.com/v1'
fetch(`${ROOT_URL}/monsters/?slug__in=adult-bronze-dragon`)
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

## ERD

![ERD](public/images/dungeonbuddyerd.png "ERD")

## RESTful Routing Chart

| HTTP METHOD (_Verb_) | URL (_Nouns_)                      | CRUD        | Response                                                             | Notes          |
| -------------------- | ---------------------------------- | ----------- | -------------------------------------------------------------------- | -------------- |
| `users`              |                                    |             |                                                                      |                |
| GET                  | `/users`                           | READ        | array of users                                                       | admin required |
| GET                  | `/auth/google`                     | READ        | offload login to google                                              |                |
| GET                  | `/auth2callback`                   | READ/CREATE | select in or add user to database after successful google oauth      |                |
| DELETE               | `/users/:userId`                   | DESTROY     | destroy user with id of :userId                                      |                |
| GET                  | `/users/:userId`                   | READ        | array of campaigns made by user with id of :userId & basic user info |                |
| POST                 | `/users/:userdId/campaigns`        | CREATE      | create a campaign under user with id of :userId                      |                |
| `campaigns`          |                                    |             |                                                                      |                |
| GET                  | `/campaigns/:campaignId`           | READ        | one campaign with id of :campaignId                                  |                |
| DELETE               | `/campaigns/:campaignId`           | DESTROY     | destroy campaign with id of :campaignId                              |                |
| GET                  | `/campaigns/:campaignId`           | READ        | array of locations                                                   |                |
| POST                 | `/campaigns/:campaignId/locations` | CREATE      | create a location under campaign with id of :campaignId              |                |
| `locations`          |                                    |             |                                                                      |                |
| DELETE               | `/locations/:locationId`           | DESTROY     | destroy genre from array of genres                                   |                |
| GET                  | `/locations/:locationId`           | READ        | array of locations (sub-locations) & array of monsters               |                |
| POST                 | `/locations/:locationId`           | CREATE      | add monster to array of monsters                                     |                |

## Wireframes

![main page wireframe](public/images/dbwireframe1.png "wireframe")
![user's campaigns page wireframe](public/images/dbwireframe2.png "wireframe")
![campaign page wireframe](public/images/dbwireframe3.png "wireframe")
![location wireframe](public/images/dbwireframe5.png "wireframe")

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
- locations within locations

## Potential Roadblocks

- Organizing the data retrieved from the API
- Displaying data in an efficient manner
