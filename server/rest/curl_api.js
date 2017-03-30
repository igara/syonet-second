import {Restivus} from "meteor/nimble:restivus";
export const Api = new Restivus({
  prettyJson: true,
});

Api.addRoute('hello', { 
  get: { 
    action: () => { 
      return { 
        status: 'success', 
        data: { 
          message: 'Hello, REST API!', 
        },
      }; 
    }, 
  },
});
