export function isFactoryDefinition<T, V extends string | undefined>(
  definition: Faker.FactoryDefinition<T, V>,
): definition is Faker.FactoryDefinition<T, V> {
  return (
    typeof definition === 'object' &&
    !Array.isArray(definition) &&
    definition != null &&
    definition.factory != null
  );
}
