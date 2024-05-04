import 'client-only';

export const clientSideFunction = () => {
  console.log(
    `use window object,
    use document object, use localStorage`
  );
  return 'client result';
};
