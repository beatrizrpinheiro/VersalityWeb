# versality web

Web System for Education 4.0 done in Vue JS, using vuetify components, JavaScript and a Database SQL Server

### Login Page

![image](https://user-images.githubusercontent.com/99905571/178382451-5050c5b7-da67-45f8-9c6b-f0d54213af50.png)

### Initial Component

VueRoute was done with all routes working.

![image](https://user-images.githubusercontent.com/99905571/178383159-6348c23f-4261-452f-8cb4-fb9240e5c1a2.png)

### Termometro de Sala

In this page I'm using into v-container a v-data-picker into v-dialog and v-text-field plus v-autocomplete with multiple choices and plus v-textarea for teacher's observations. The button call a function that to save the informations thougth post method of API and is integrated with database on SQL Server. Furthemore, there is a v-simple-table with a method that make the load of informations were salved. 

![image](https://user-images.githubusercontent.com/99905571/178384781-ecd7ef52-fc3a-4d84-8f33-0b0d44957764.png)

### Planos de Ensino

In this page I do API consume for to return the files (teaching planes) and was insert a button for the user make the download of your teaching plan. In the search bar I created a filter method for searching. 

![image](https://user-images.githubusercontent.com/99905571/178385544-e3f007b4-19fe-4ee6-bb04-8f58582124de.png)

### Métodos Ativos

In this page I'm using v-expansion-panels component for to show the concept and step by step for the teachers to apply active methods in their classes.

![image](https://user-images.githubusercontent.com/99905571/178386018-1fbb7a4b-3597-4966-b00e-ac7b935ff3bd.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
