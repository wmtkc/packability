import Edit from './svgs/edit'
import Jamstack from './svgs/jamstack'
import Lighthouse from './svgs/lighthouse'
import Lightning from './svgs/lightning'
import Notion from './svgs/notion'
import Plus from './svgs/plus'
import Scroll from './svgs/scroll'
import Wifi from './svgs/wifi'

const features = [
    {
        text: 'Blazing fast',
        icon: Lightning,
    },
    {
        text: 'JAMstack based',
        icon: Jamstack,
    },
    {
        text: 'Always available',
        icon: Wifi,
    },
    {
        text: 'Customizable',
        icon: Edit,
    },
    {
        text: 'Incremental SSG',
        icon: Plus,
    },
    {
        text: 'MIT Licensed',
        icon: Scroll,
    },
    {
        text: 'Edit via Notion',
        icon: Notion,
    },
    {
        text: 'Great scores',
        icon: Lighthouse,
    },
]

const Features = () => (
    <div className="features">
        {features.map(({ text, icon: Icon }) => (
            <div className="feature" key={text}>
                {Icon && <Icon height={24} width={24} />}
                <h4>{text}</h4>
            </div>
        ))}
    </div>
)

export default Features