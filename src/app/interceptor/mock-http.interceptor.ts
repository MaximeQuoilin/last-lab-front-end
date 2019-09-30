import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mocks } from '../mock/mocks';
import { environment } from 'src/environments/environment';

/**
 * Generated file, do not do not modify it.
 */
@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const foundMock = this.isFound(request);

      if (foundMock) {
          return this.executeMock(request, foundMock.response);
      } else {
          return next.handle(request);
      }

    }

    /**
     * return the mock responding this request
     * @param request current request
     */
    private isFound(request: HttpRequest<any>) {
      const url: string = request.url;
      const method: string = request.method;
      return mocks.find(mock => {
        return ((new RegExp(mock.url).test(url)) &&
            (method === mock.methods) &&
            (environment.mock.services[mock.name] || environment.mock.all));
    });
    }

    private executeMock(request, response): Observable<HttpEvent<any>> {
        const result = response(request);
        if (result instanceof Observable) {
            return result;
        }
        return of(result);
    }

}
