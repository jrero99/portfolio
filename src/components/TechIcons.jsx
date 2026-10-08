import {
  siClaude,
  siDocker,
  siExpress,
  siGooglebigquery,
  siGooglecloud,
  siJest,
  siJquery,
  siLaravel,
  siModelcontextprotocol,
  siMysql,
  siNodedotjs,
  siPhp,
  siReact,
  siReactquery,
  siRedux,
  siSap,
  siSass,
  siStripe,
  siTypescript,
  siVitest,
} from "simple-icons";

// Stack names used in Info.jsx → Simple Icons. Names without an entry are not rendered.
const techIcons = {
  "Node.js": siNodedotjs,
  Express: siExpress,
  TypeScript: siTypescript,
  React: siReact,
  Redux: siRedux,
  "TanStack Query": siReactquery,
  Stripe: siStripe,
  BigQuery: siGooglebigquery,
  Jest: siJest,
  Vitest: siVitest,
  Claude: siClaude,
  MCP: siModelcontextprotocol,
  GCP: siGooglecloud,
  Docker: siDocker,
  Laravel: siLaravel,
  MySQL: siMysql,
  Sass: siSass,
  PHP: siPhp,
  jQuery: siJquery,
  SAP: siSap,
};

export const getTechIcon = (name) => techIcons[name];

export const TechIcon = ({ icon, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d={icon.path} />
  </svg>
);
