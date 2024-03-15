import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface BreadcrumbsProps {
  items: string[];
}

const Breadcrumbs = ({ items } : BreadcrumbsProps ) => (
  <div className="container mx-auto py-6 px-4 sm:px-0">
    <ul className="flex gap-2 items-center">
      {items.map((label, index) => (
        <li key={index} className="text-sm font-semibold">
          <span className={`${index === items.length - 1 ? 'text-[#999999]' : 'text-[#F5333F]'} mr-2`}>{label}</span>
          {index < items.length - 1 && <KeyboardArrowRightIcon className="text-[#C5C7D0]" />}
        </li>
      ))}
    </ul>
  </div>
);

export default Breadcrumbs;
