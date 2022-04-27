import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { ReactComponent as CSharpIcon } from './icon-csharp.svg';
import { ReactComponent as DotNetIcon } from './icon-dotnet.svg';
import { ReactComponent as JSIcon } from './icon-js.svg';
import { ReactComponent as GitIcon } from './icon-git.svg';
import { ReactComponent as OracleIcon } from './icon-oracle.svg';

const iconTypes = {
    "linkedin": color => (
        <FaLinkedin className="SocialMediaIcon" fill={color} />
    ),
    "twitter": color => (
        <FaTwitterSquare className="SocialMediaIcon" fill={color} />
    ),
    "csharp": color => (
        <CSharpIcon className="ToolIcon" fill={color} />
    ),
    "dotnet": color => (
        <DotNetIcon className="ToolIcon" fill={color} />
    ),
    "js": color => (
        <JSIcon className="ToolIcon" fill={color} />
    ),
    "git": color => (
        <GitIcon className="ToolIcon" fill={color} />
    ),
    "oracle": color => (
        <OracleIcon className="ToolIcon" fill={color} />
    ),
};

function CustomIcon({ type, color = 'blue', onClick }) {
    return (
        <span 
            onClick={onclick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { CustomIcon };