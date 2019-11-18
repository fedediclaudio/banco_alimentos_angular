/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { ErrorHandler } from '../core/error.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Insignia } from '../../models/Insignia';
import { SocketConnection } from '../../sockets/socket.connections';
import { InsigniaOtorgadaVoluntario } from '../../models/InsigniaOtorgadaVoluntario';
import { InsigniaOtorgadaOrgDonante } from '../../models/InsigniaOtorgadaOrgDonante';


/**
 * Api services for the `Insignia` model.
 */
@Injectable()
export class InsigniaApi extends BaseLoopBackApi {

  constructor(
    @Inject(HttpClient) protected http: HttpClient,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    super(http,  connection,  models, auth, errorHandler);
  }

  /**
   * Buscar un elemento relacionado por id para insigniaOtorgadaVoluntarios.
   *
   * @param {any} id Insignia id
   *
   * @param {any} fk Clave foránea para insigniaOtorgadaVoluntarios
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public findByIdInsigniaOtorgadaVoluntarios(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprimir un elemento relacionado por id para insigniaOtorgadaVoluntarios.
   *
   * @param {any} id Insignia id
   *
   * @param {any} fk Clave foránea para insigniaOtorgadaVoluntarios
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdInsigniaOtorgadaVoluntarios(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar un elemento relacionado por id para insigniaOtorgadaVoluntarios.
   *
   * @param {any} id Insignia id
   *
   * @param {any} fk Clave foránea para insigniaOtorgadaVoluntarios
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public updateByIdInsigniaOtorgadaVoluntarios(id: any, fk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Buscar un elemento relacionado por id para insigniaOtorgadaOrgDonantes.
   *
   * @param {any} id Insignia id
   *
   * @param {any} fk Clave foránea para insigniaOtorgadaOrgDonantes
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public findByIdInsigniaOtorgadaOrgDonantes(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprimir un elemento relacionado por id para insigniaOtorgadaOrgDonantes.
   *
   * @param {any} id Insignia id
   *
   * @param {any} fk Clave foránea para insigniaOtorgadaOrgDonantes
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdInsigniaOtorgadaOrgDonantes(id: any, fk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar un elemento relacionado por id para insigniaOtorgadaOrgDonantes.
   *
   * @param {any} id Insignia id
   *
   * @param {any} fk Clave foránea para insigniaOtorgadaOrgDonantes
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public updateByIdInsigniaOtorgadaOrgDonantes(id: any, fk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes/:fk";
    let _routeParams: any = {
      id: id,
      fk: fk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * insigniaOtorgadaVoluntarios consultas de Insignia.
   *
   * @param {any} id Insignia id
   *
   * @param {object} filter 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public getInsigniaOtorgadaVoluntarios(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof filter !== 'undefined' && filter !== null) _urlParams.filter = filter;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en insigniaOtorgadaVoluntarios de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public createInsigniaOtorgadaVoluntarios(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime todos los insigniaOtorgadaVoluntarios de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteInsigniaOtorgadaVoluntarios(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Recuentos insigniaOtorgadaVoluntarios de Insignia.
   *
   * @param {any} id Insignia id
   *
   * @param {object} where Criteria to match model instances
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countInsigniaOtorgadaVoluntarios(id: any, where: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios/count";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof where !== 'undefined' && where !== null) _urlParams.where = where;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * insigniaOtorgadaOrgDonantes consultas de Insignia.
   *
   * @param {any} id Insignia id
   *
   * @param {object} filter 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public getInsigniaOtorgadaOrgDonantes(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof filter !== 'undefined' && filter !== null) _urlParams.filter = filter;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en insigniaOtorgadaOrgDonantes de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public createInsigniaOtorgadaOrgDonantes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime todos los insigniaOtorgadaOrgDonantes de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteInsigniaOtorgadaOrgDonantes(id: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Recuentos insigniaOtorgadaOrgDonantes de Insignia.
   *
   * @param {any} id Insignia id
   *
   * @param {object} where Criteria to match model instances
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countInsigniaOtorgadaOrgDonantes(id: any, where: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes/count";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof where !== 'undefined' && where !== null) _urlParams.where = where;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Patch an existing model instance or insert a new one into the data source.
   *
   * @param {object} data Request data.
   *
   *  - `data` – `{object}` - Model instance data
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public patchOrCreate(data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia";
    let _routeParams: any = {};
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Patch attributes for a model instance and persist it into the data source.
   *
   * @param {any} id Insignia id
   *
   * @param {object} data Request data.
   *
   *  - `data` – `{object}` - An object of model property name/value pairs
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Capta la relación hasOne voluntarios.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaVoluntarios.
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public getInsigniaOtorgadaVoluntariosVoluntarios(id: any, nk: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios/:nk/voluntarios";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en voluntarios de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaVoluntarios.
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public createInsigniaOtorgadaVoluntariosVoluntarios(id: any, nk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios/:nk/voluntarios";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar voluntarios de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaVoluntarios.
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public updateInsigniaOtorgadaVoluntariosVoluntarios(id: any, nk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios/:nk/voluntarios";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime voluntarios de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaVoluntarios.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyInsigniaOtorgadaVoluntariosVoluntarios(id: any, nk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios/:nk/voluntarios";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Capta la relación hasOne insignia.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaVoluntarios.
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public getInsigniaOtorgadaVoluntariosInsignia(id: any, nk: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios/:nk/insignia";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en insignia de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaVoluntarios.
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public createInsigniaOtorgadaVoluntariosInsignia(id: any, nk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios/:nk/insignia";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar insignia de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaVoluntarios.
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public updateInsigniaOtorgadaVoluntariosInsignia(id: any, nk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios/:nk/insignia";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime insignia de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaVoluntarios.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyInsigniaOtorgadaVoluntariosInsignia(id: any, nk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios/:nk/insignia";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Capta la relación hasOne organizacionDonantes.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaOrgDonantes.
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public getInsigniaOtorgadaOrgDonantesOrganizacionDonantes(id: any, nk: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes/:nk/organizacionDonantes";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en organizacionDonantes de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaOrgDonantes.
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public createInsigniaOtorgadaOrgDonantesOrganizacionDonantes(id: any, nk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes/:nk/organizacionDonantes";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar organizacionDonantes de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaOrgDonantes.
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public updateInsigniaOtorgadaOrgDonantesOrganizacionDonantes(id: any, nk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes/:nk/organizacionDonantes";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime organizacionDonantes de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaOrgDonantes.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyInsigniaOtorgadaOrgDonantesOrganizacionDonantes(id: any, nk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes/:nk/organizacionDonantes";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Capta la relación hasOne insignia.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaOrgDonantes.
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public getInsigniaOtorgadaOrgDonantesInsignia(id: any, nk: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes/:nk/insignia";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en insignia de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaOrgDonantes.
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public createInsigniaOtorgadaOrgDonantesInsignia(id: any, nk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes/:nk/insignia";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Actualizar insignia de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaOrgDonantes.
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public updateInsigniaOtorgadaOrgDonantesInsignia(id: any, nk: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes/:nk/insignia";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Suprime insignia de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaOrgDonantes.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyInsigniaOtorgadaOrgDonantesInsignia(id: any, nk: any, customHeaders?: Function): Observable<any> {
    let _method: string = "DELETE";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes/:nk/insignia";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en insigniaOtorgadaVoluntarios de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public createManyInsigniaOtorgadaVoluntarios(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en insigniaOtorgadaOrgDonantes de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public createManyInsigniaOtorgadaOrgDonantes(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en voluntarios de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaVoluntarios.
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public createManyInsigniaOtorgadaVoluntariosVoluntarios(id: any, nk: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios/:nk/voluntarios";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en insignia de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaVoluntarios.
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public createManyInsigniaOtorgadaVoluntariosInsignia(id: any, nk: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaVoluntarios/:nk/insignia";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en organizacionDonantes de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaOrgDonantes.
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public createManyInsigniaOtorgadaOrgDonantesOrganizacionDonantes(id: any, nk: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes/:nk/organizacionDonantes";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Crea una nueva instancia en insignia de este modelo.
   *
   * @param {any} id Insignia id
   *
   * @param {any} nk Clave foránea para insigniaOtorgadaOrgDonantes.
   *
   * @param {object} data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Insignia` object.)
   * </em>
   */
  public createManyInsigniaOtorgadaOrgDonantesInsignia(id: any, nk: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Insignia/:id/insigniaOtorgadaOrgDonantes/:nk/insignia";
    let _routeParams: any = {
      id: id,
      nk: nk
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `Insignia`.
   */
  public getModelName() {
    return "Insignia";
  }
}
