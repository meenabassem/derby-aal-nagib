// @ts-ignore
import {fetchUtils} from "react-admin";
// @ts-ignore
import {stringify} from "query-string";
import {baseURL} from "../modules/network/NetworkHelper";

const apiUrl = baseURL; // 'https://my.api.com/';
const httpClient = fetchUtils.fetchJson;

export default {
  getList: (resource: any, params: any) => {
    switch (resource) {
      case "LiveLookups":
        return httpClient(`${apiUrl}/${resource}`).then(
          ({ headers, json }: any) => ({
            data: json,
            // total: parseInt(headers?.get('content-range')?.split('/')?.pop(), 10),
            total: json?.length,
          })
        );
      default:
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
          sort: JSON.stringify([field, order]),
          range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
          filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }: any) => ({
          data: json?.map((i: any) => ({ ...i, id: i._id })),
          // total: parseInt(headers?.get('content-range')?.split('/')?.pop(), 10),
          total: json?.length,
        }));
    }
  },

  getOne: (resource: any, params: any) => {
    switch (resource) {
      case "LiveLookups":
        return httpClient(`${apiUrl}/${resource}`).then(
          ({ headers, json }: any) => ({
            data: json,
            // total: parseInt(headers?.get('content-range')?.split('/')?.pop(), 10),
            total: json?.length,
          })
        );
      default:
        return httpClient(`${apiUrl}/${resource}/${params?.id}`).then(
          ({ json }: any) => ({
            data: json,
            id: json?._id,
          })
        );
    }
  },

  getMany: (resource: any, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params?.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }: any) => ({ data: json }));
  },

  getManyReference: (resource: any, params: any) => {
    console.log("get many reference", resource, params);
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    switch (resource) {
      case "EventResults":
      case "EventBasketing":
        return httpClient(url).then(({ headers, json }: any) => {
          console.log("get many reference response", json);
          return {
            data: json?.map((i: any) => ({
              ...i,
              eventId: params?.id,
            })),
            total:
              parseInt(headers.get("content-range")?.split("/")?.pop(), 10) ||
              json?.length ||
              0,
          };
        });
      default:
        return httpClient(url).then(({ headers, json }: any) => {
          console.log("get many reference response", json);
          return {
            data: json,
            total:
              parseInt(headers.get("content-range")?.split("/")?.pop(), 10) ||
              json?.length ||
              0,
          };
        });
    }
  },

  update: (resource: any, params: any) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }: any) => ({ data: json })),

  updateMany: (resource: any, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }: any) => ({ data: json }));
  },

  create: (resource: any, params: any) => {
    switch (resource) {
      case "Events":
        return httpClient(`${apiUrl}/${resource}`, {
          method: "POST",
          body: JSON.stringify({ ...params.data, Result: [], Basketing: [] }),
        }).then(({ json }: any) => ({
          data: { ...params.data, id: json?.id },
        }));
      case "EventResults":
      case "EventBasketing":
        var url = new URL(window?.location?.href?.replace("#", ""));
        console.log("URL: ", url);
        const eventId = url?.searchParams?.get("event_id") ?? "";
        console.log("eventId: ", eventId);

        return httpClient(`${apiUrl}/${resource}`, {
          method: "POST",
          body: JSON.stringify({ ...params.data, eventId, Country: "EG" }),
        }).then(({ json }: any) => ({
          data: { ...params.data, id: json?.id },
        }));

      default:
        return httpClient(`${apiUrl}/${resource}`, {
          method: "POST",
          body: JSON.stringify(params.data),
        }).then(({ json }: any) => ({
          data: { ...params.data, id: json.id },
        }));
    }
  },

  delete: (resource: any, params: any) => {
    console.log("delete", resource, "Params:", params);

    switch (resource) {
      case "EventResults":
      case "EventBasketing":
        return httpClient(`${apiUrl}/${resource}/${params.id}`, {
          method: "DELETE",
          body: JSON.stringify({ eventId: params?.previousData?.eventId }),
          // }).then(({ json }: any) => ({ data: json }));
        }).then(({ json }: any) => ({ data: { result: "deleted" } }));
      default:
        return httpClient(`${apiUrl}/${resource}/${params.id}`, {
          method: "DELETE",
        }).then(({ json }: any) => ({ data: json }));
    }
  },

  deleteMany: (resource: any, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    }).then(({ json }: any) => ({ data: json }));
  },
};
