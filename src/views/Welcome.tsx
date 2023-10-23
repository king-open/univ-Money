import { defineComponent } from 'vue';
import {RouterView} from 'vue-router'
export const Welcome = defineComponent({
  setup:(_props,_context)=>{
    return ()=>{
      <div>
        <RouterView/>
      </div>
    }
  }
})
