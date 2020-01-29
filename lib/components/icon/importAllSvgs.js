let requireAll = requireContext => requireContext.keys().map(requireContext);
let svgs = require.context('./svgs', false, /\.svg$/);
requireAll(svgs);
