interface LinkProps {
  title: string;
  link: string;
}

export default function AppListItem(props: LinkProps) {
  return (
    <li className="d-flex align-items-center justify-content-between flex-row border border-gray-900 rounded-3 px-3 py-3 my-3">
      <span>{props.title}</span>
      <a href={`${props.link}`} className="btn btn-primary px-4">
        View
      </a>
    </li>
  );
}
