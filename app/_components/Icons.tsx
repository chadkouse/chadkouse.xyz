import { cn } from "@/utils/cn"
import { forwardRef } from "react"

export type IconProps = React.SVGProps<SVGSVGElement>;

export const DefaultIconProps:IconProps = {
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "currentColor",
}

const Calendar = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={cn('', className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none">
    <title>{props.xlinkTitle}</title>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
));
Calendar.displayName = "Calendar";

const Clock = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={cn('', className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none">
    <title>{props.xlinkTitle}</title>
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
  </svg>
));
Clock.displayName = "Clock";

const LinkExternal = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={cn('', className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none">
    <title>{props.xlinkTitle}</title>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g id="Interface / External_Link">
        <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke={props.stroke} strokeWidth={props.strokeWidth} strokeLinecap={props.strokeLinecap} strokeLinejoin={props.strokeLinejoin}></path>
      </g>
    </g>
  </svg>
));
LinkExternal.displayName = "LinkExternal";

const MicrophoneHandheld = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={cn('', className)}
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    width="24"
    height="24"
  >
    <title>{props.xlinkTitle}</title>
    <g id="SVGRepo_bgCarrier" strokeWidth={props.strokeWidth}></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <g>
          <g>
            <path d="M488.413,118.27c0-31.606-12.309-61.323-34.659-83.671C411.664-7.493,345.498-11.175,299.184,23.53l-7.131-7.131 L268.211,40.24l7.12,7.12c-16.405,21.844-24.698,48.595-23.458,76.141L39.935,351.283l38.815,38.815 c-18.243,21.376-21.458,35.552-24.34,48.289c-2.975,13.143-5.545,24.493-30.822,49.771L47.429,512 c32.17-32.171,36.257-50.232,39.865-66.169c2.247-9.924,4.128-18.212,15.358-31.83l34.416,34.416l227.782-211.94 c1.797,0.081,3.593,0.133,5.382,0.133c25.634,0,50.338-8.262,70.754-23.594l7.124,7.124l23.841-23.841l-7.121-7.121 C480.132,168.825,488.413,144.186,488.413,118.27z M137.911,401.577L86.773,350.44l182.909-196.581l64.81,64.811L137.911,401.577 z M366.302,202.793l-80.745-80.745c-0.818-18.069,4.097-35.659,13.96-50.502l117.286,117.287 C401.963,198.697,384.374,203.609,366.302,202.793z M440.649,164.995L323.369,47.714c32.839-21.755,77.634-18.184,106.543,10.725 c15.982,15.982,24.783,37.231,24.783,59.83C454.695,135.143,449.785,151.259,440.649,164.995z"></path>
            <rect x="191.378" y="260.003" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 165.2732 622.1811)" width="40.234" height="33.717"></rect>
          </g>
        </g>
      </g>
    </g>
  </svg>
));
MicrophoneHandheld.displayName="MicrophoneHandheld";

const Github = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={cn('', className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>My Github</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
));
Github.displayName = "Github";

const Sun = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={cn('', className)}
    viewBox="0 0 24 24"
    fill="none"
    >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </g>
  </svg>
));
Sun.displayName = "Sun";

const Moon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} {...props}
    className={cn('', className)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </g>
  </svg>
));
Moon.displayName = "Moon";

export { Calendar, Clock, LinkExternal, MicrophoneHandheld, Github, Sun, Moon };