

import { Injectable } from '@angular/core';

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor() { }

    public getToken(): string | null {
        return localStorage.getItem(ACCESS_TOKEN);
    }
    getRefreshToken(): string | null {
        return localStorage.getItem(REFRESH_TOKEN);
    }

    saveToken(token: string): void {
        localStorage.setItem(ACCESS_TOKEN, token);
    }

    saveRefreshToken(refreshToken: string): void {
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
    }

    removeToken(): void {
        localStorage.removeItem(ACCESS_TOKEN);
    }

    removeRefreshToken(): void {
        localStorage.removeItem(REFRESH_TOKEN);
    }
}






//
// import { Injectable } from '@angular/core';
//
// const TOKEN_KEY = 'auth-token';
// const USER_KEY = 'auth-user';
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class TokenService {
//
//   constructor() { }
//
//   signOut(): void {
//     window.sessionStorage.clear();
//   }
//
//   public saveToken(token: string): void {
//     window.sessionStorage.removeItem(TOKEN_KEY);
//     window.sessionStorage.setItem(TOKEN_KEY, token);
//   }
//
//   public getToken(): string | null {
//     return window.sessionStorage.getItem(TOKEN_KEY);
//   }
//
//   public saveUser(user: any): void {
//     window.sessionStorage.removeItem(USER_KEY);
//     window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
//   }
//
//   public getUser(): any {
//     const user = window.sessionStorage.getItem(USER_KEY);
//     if (user) {
//       return JSON.parse(user);
//     }
//
//     return {};
//   }
// }

//
// import { Injectable } from '@angular/core';
//
// const ACCESS_TOKEN = 'access_token';
// const REFRESH_TOKEN = 'refresh_token';
//
// @Injectable({
//     providedIn: 'root'
// })
// export class TokenService {
//
//     constructor() { }
//
//     public getToken(): string | null {
//         return localStorage.getItem(ACCESS_TOKEN);
//     }
//     getRefreshToken(): string | null {
//         return localStorage.getItem(REFRESH_TOKEN);
//     }
//
//     saveToken(token: string): void {
//         localStorage.setItem(ACCESS_TOKEN, token);
//     }
//
//     saveRefreshToken(refreshToken: string): void {
//         localStorage.setItem(REFRESH_TOKEN, refreshToken);
//     }
//
//     removeToken(): void {
//         localStorage.removeItem(ACCESS_TOKEN);
//     }
//
//     removeRefreshToken(): void {
//         localStorage.removeItem(REFRESH_TOKEN);
//     }
// }
//
//
//
//
//




// import { Injectable } from '@angular/core';
// const TOKEN_KEY = 'auth-token';
// const USER_KEY = 'auth-user';
// @Injectable({
//   providedIn: 'root'
// })
// export class TokenStorageService {
//   constructor() { }
//
//   signOut(): void {
//     window.sessionStorage.clear();
//   }
//
//   public saveToken(token: string): void {
//     window.sessionStorage.removeItem(TOKEN_KEY);
//     window.sessionStorage.setItem(TOKEN_KEY, token);
//   }
//
//   public getToken(): string | null {
//     return window.sessionStorage.getItem(TOKEN_KEY);
//   }
//
//   public saveUser(user: any): void {
//     window.sessionStorage.removeItem(USER_KEY);
//     window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
//   }
//
//   public getUser(): any {
//     const user = window.sessionStorage.getItem(USER_KEY);
//     if (user) {
//       return JSON.parse(user);
//     }
//
//     return {};
//   }
// }
