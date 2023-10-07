"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const ovenplayer_1 = __importDefault(require("ovenplayer"));
const react_1 = require("react");
const ovenPlayerId = "oven-player-id";
exports.default = (props) => {
  (0, react_1.useEffect)(() => {
    ovenplayer_1.default.create(ovenPlayerId, Object.assign({}, props.config));
  }, []);
  return React.createElement("div", { id: ovenPlayerId });
};
