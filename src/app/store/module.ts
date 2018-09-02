import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppState } from './model';
import { rootReducer } from './reducers';

@NgModule({
  imports: [NgReduxModule]
})
export class StoreModule {
  constructor(
    public store: NgRedux<AppState>,
    devTools: DevToolsExtension
  ) {
    store.configureStore(
      rootReducer,
      {},
      [],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}