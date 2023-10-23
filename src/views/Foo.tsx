import { defineComponent } from 'vue';
export const Foo = defineComponent({
  setup: (_props, _context) => {
    return () => (
      <div>Foo</div>
    )
  }
})
