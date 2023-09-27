import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
//  console.log(items)
  return (
    <nav className="flex bg-gray-100 p-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center">
        {items.length === 2 && items[items.length - 1].label === "Dashboard" ? (
          <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
            {items[0].label}
          </span>
        ) : (
          items.map((item, index) => {
            const isLastItem = index === items.length - 1;
            return (
              <li key={index} className="inline-flex items-center">
                {isLastItem ? (
                  <span className="text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={`/${item.href}`}
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    {item.label}
                  </a>
                )}
                {!isLastItem && (
                  <svg
                    className=" ml-3 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                )}
              </li>
            );
          })
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
