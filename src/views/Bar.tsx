import { defineComponent } from 'vue';
export const Bar = defineComponent({
  setup: (_props, _context) => {
    return () => (
      <div>Bar</div>
    )
  }
})
