var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"APP_ROUTES","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"about","loadChildren":"./about/about.module#AboutModule","children":[{"kind":"module","children":[{"name":"ABOUT_ROUTES","filename":"src/app/about/about-routing.module.ts","module":"AboutRoutingModule","children":[{"path":"","component":"AboutComponent","children":[{"path":"","redirectTo":"todomvc","pathMatch":"full"},{"path":"todomvc","component":"TodoMVCComponent"},{"path":"compodoc","component":"CompodocComponent"}]}],"kind":"module"}],"module":"AboutModule"}]},{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"**","redirectTo":"home","pathMatch":"full"}],"kind":"module"},{"name":"HOME_ROUTES","filename":"src/app/home/home-routing.module.ts","module":"HomeRoutingModule","children":[{"path":"home","component":"HomeComponent"}],"kind":"module"}]}
