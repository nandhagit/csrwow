import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable }  from 'rxjs';

@Injectable()
export class WowInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //console.log(req.url);
    const newreq = req.clone({
        headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    })
    return next.handle(newreq);
  }
}