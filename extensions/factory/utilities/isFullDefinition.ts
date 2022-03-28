export function isFullDefinition<T, V extends string>(
  definition: unknown,
): definition is Faker.FullFactoryDefinition<T, V> {
  return (
    (definition as Faker.FullFactoryDefinition<T, string>).variants !==
    undefined
  );
}
