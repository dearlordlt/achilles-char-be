# achilles-char-be

GET 	api/v1/auth +

GET 	api/v1/characters/
GET 	api/v1/characters/:charid
UPDATE	api/v1/characters/:charid
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
UPDATE	api/v1/charaters/:charid/notes/:noteid