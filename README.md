# achilles-char-be

GET 	api/v1/login +

GET 	api/v1/characters/
GET 	api/v1/characters/:charid
PATCH	api/v1/characters/:charid
DELETE  api/v1/characters/:charid ??
POST    api/v1/characters/

GET		api/v1/skills_cg/
GET		api/v1/skills_ncg/

GET		api/v1/weapons/?type/?name/?.../?isCustom
POST	api/v1/weapons/

GET		api/v1/shields/?type/?name/?.../?isCustom
POST	api/v1/shields/

GET		api/v1/charaters/:charid/notes
POST	api/v1/charaters/:charid/notes
DELETE	api/v1/charaters/:charid/notes/:noteid
PATCH	api/v1/charaters/:charid/notes/:noteid

POSTMAN - https://www.getpostman.com/collections/bfd314916042c0eb0462