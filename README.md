# Dungeon Buddy

Dungeon Buddy is a complementary web-app for dunegon masters to help plan out and keep track of their campaigns. Users can create campaigns, locations within them, and assign monster encounters to those locations. Utilizing the Open5e API, users can quickly add monsters to their locations and view indepth information on them through a provided link. Future expansion of the Dungeon Buddy app will include in-house display of monster information.

### [Link to Dungeon Buddy](https://dungeon-buddy-ar-cd4d1e34fd17.herokuapp.com/ "Dungeon Buddy")

## Tech Used
- HTML/CSS/EJS
- JavaScript
- Bootstrap
- Open5e API
- MongoDB
- Mongoose
- Node.js
- Express
- Passport

## Credits
- Hero art: freepik https://www.freepik.com/free-ai-image/view-imposing-castle-with-natural-landscape_40572804.htm#query=fantasy%20castle%20art&position=0&from_view=search&track=ais
- Default Campaign art: Feed The Multiverse https://feedthemultiverse.com/2018/07/15/basic-parchment-tolkien-style-fantasy-map-without-text-entire-terrain-designed-roleplaying-game/
## Color Themes
- #9E0707
- #202524


# Project Planning & Initial Mockup
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
| GET                  | `/users/all`                       | READ        | array of users                                                       | Stretch goal, admin required |
| GET                  | `/auth/google`                     | READ        | offload login to google                                              |                |
| GET                  | `/auth2callback`                   | READ/CREATE | select in or add user to database after successful google oauth      |                |
| DELETE               | `/users/`                          | DESTROY     | destroy user with id of :userId                                      |                |
| GET                  | `/users/`                          | READ        | array of campaigns made by user with id of :userId & basic user info |                |
| POST                 | `/users/:userdId/campaigns`        | CREATE      | create a campaign under user with id of :userId                      |                |
| `campaigns`          |                                    |             |                                                                      |                |
| GET                  | `/campaigns/:campaignId`           | READ        | one campaign with id of :campaignId                                  |                |
| DELETE               | `/campaigns/:campaignId`           | DESTROY     | destroy campaign with id of :campaignId                              |                |
| POST                 | `/campaigns/:campaignId/locations` | CREATE      | create a location under campaign with id of :campaignId              |                |
| PUT                  | `/campaigns/:campaignId`           | UPDATE      | edit campaign title, description, and image                          |                |
| `locations`          |                                    |             |                                                                      |                |
| DELETE               | `/locations/:locationId`           | DESTROY     | destroy location from array of locations                             |                |
| GET                  | `/locations/:locationId`           | READ        | one location with id of :locationId & array of monsters              |                |
| POST                 | `/locations/:locationId`           | CREATE      | add monster to array of monsters                                     |                |
| PUT                  | `/locations/:locationId`           | UPDATE      | remove monster from array of monsters                                |                |
| PUT                  | `/locations/:locationId/update`    | UPDATE      | edit location title, description, and image                          |                |

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
- Removing locations from campaigns
- Removing locations from other locations
- Adding monsters to locations
- Removing monsters from locations
- Browse monsters from list / search for monsters
- Store campaigns/locations/monsters in database

## Stretch Goals
- Fluid access to information (reduce separate pages for information: cards, accordion, etc)
- Nesting locations within locations
- Display monster information for each monster
- Keep track of health for individual monster instances for live running of D&D
- Add other encounters/events: friendly-npc? shopkeeper, innkeeper, etc
- Custom visuals for nav/buttons/etc

## Potential Roadblocks
- Organizing the data retrieved from the API
- Displaying data in an efficient manner

