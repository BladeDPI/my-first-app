import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //block request by URL
    const modifiedRequest = req.clone({
      //add header to eache request
      headers: req.headers.append('Auth', 'xyz')
    });
    console.log('Request is on its way');
    return next.handle(modifiedRequest); //intercept response
  }
}
