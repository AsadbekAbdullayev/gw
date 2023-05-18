import useGetwidth from './getwidth';
function capitalizeFirstLetter(str) {
  const string = str?.replaceAll('_', ' ')?.toLowerCase();
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}
export { useGetwidth, capitalizeFirstLetter };
