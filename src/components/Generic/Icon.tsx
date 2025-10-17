import React, { Suspense, useMemo } from "react";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
}

function formatComponentName(name: string) {
  return name
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

const icons = import.meta.glob('../Icons/*.tsx');

export default function Icon({ name, ...rest }: IconProps) {
  const componentName = useMemo(() => formatComponentName(name), [name]);

  const DynamicIcon = useMemo(() => {
    const loader = icons[`../Icons/${componentName}.tsx`];
    if (!loader) {
      throw new Error(`Icon "${componentName}" not found`);
    }

    return React.lazy(async () => {
      const module = (await loader()) as {
        default: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      };
      return { default: module.default };
    });
  }, [componentName]);

  return (
    <Suspense fallback={<svg data-testid="fallback-element" {...rest} />}>
      <DynamicIcon {...rest} />
    </Suspense>
  );
}
