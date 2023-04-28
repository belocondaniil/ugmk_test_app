## Prod start full app (Docker compose)
Create backend and frontend images in one command<Br/>
Run backend and frontend images in one command

```bash
$ npm run dockerize
$ npm run start-container
```

### Delete docker compose container.<Br/>
Docker compose does not support auto deletion of a container after a stop.

```bash
$ npm run stop-container
```

## Local start

### Backend
```bash
$ cd backend
$ npm i
$ npm run start
```

### Backend Docker

```bash
$ cd backend
$ npm run dockerize
$ npm run start-container
```


### Frontend
```bash
$ cd frontend
$ npm i
$ npm run dev
```

### Frontend Docker

```bash
$ cd frontend
$ npm run dockerize
$ npm run start-container
```
