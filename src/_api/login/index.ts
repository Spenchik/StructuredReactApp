// export * from './mappin';
// export * from './error-handling';

import { mapApiLoginToLogin } from './mapping';


export const login$ = window.http.get('url here').subscribe(mapApiLoginToLogin)

export doLogin() {
  
}