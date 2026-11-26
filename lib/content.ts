/** Define a bilingual content object without depending on the client-only language provider. */
export function defineContent<T>(content: { en: T; id: NoInfer<T> }) {
  return content
}
