
import { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Command, CommandInput, CommandList, CommandItem, CommandEmpty } from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils";

type Option = { label: string; value: string };

interface MultiSelectComboboxProps {
  options: Option[];
  label?: string;
  placeholder?: string;
}

export default function MultiSelectCombobox({
    options,
    label = "Select items",
    placeholder = "Search...",
  }: MultiSelectComboboxProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    // simulate search delay
    useEffect(() => {
      setLoading(true);
      const timeout = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(timeout);
    }, [query]);

    const toggleSelection = (value: string) => {
      setSelected(prev => (prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]))
    };

    const removeSelection = (value: string) => {
      setSelected(prev => prev.filter(v => v !== value))
    }

    const clearAll = () => setSelected([]);

    const filteredOptions =
      query.trim().length === 0
        ? options
        : options.filter((o) =>
            o.label.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <Popover open={open} onOpenChange={setOpen}>
        {/* INPUT / TRIGGER */}
        <PopoverTrigger asChild>
          <div
            className={cn(
              "relative w-full border rounded-md px-3 py-4 min-h-14 cursor-pointer",
              "hover:border-primary transition",
              selected.length > 0 && "pt-3 pb-2"
            )}
          >
            <span
              className={cn(
                "absolute left-3 top-4 text-foreground transition-all pointer-events-none",
                selected.length > 0 || open
                  ? "text-xs -top-2 bg-white px-1"
                  : "text-sm"
              )}
            >
              {label}
            </span>
  
            {/* Badges inside input */}
            { !!selected?.length && (
              <div className="flex flex-wrap gap-3 max-w-full pr-10">
                { selected.map((item) => {
                   const option = options.find(c => c.value === item);

                   return option ? (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="flex items-center gap-2 text-sm rounded-lg border-0 ring ring-red-500 bg-[#E5E7EB] pl-3 py-1.5 pr-2"
                      >
                        {option.label}
                        <X
                          className="w-3.5 h-3.5 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSelection(item);
                          }}
                        />
                      </Badge>

                   ) : null
                })}
              </div>
            )}
  
            {/* Actions on right side */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
              {selected.length > 0 && (
                <X
                  className="w-5 h-5 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearAll();
                  }}
                />
              )}
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </PopoverTrigger>
  
        {/* CONTENT */}
        <PopoverContent className="w-(--radix-popper-anchor-width) p-0">
          <Command shouldFilter={false}>
            <CommandInput
              placeholder={placeholder}
              onValueChange={(val) => setQuery(val)}
            />
  
            <CommandList>
              {loading && (
                <div className="py-6 text-center text-muted-foreground">
                  Loading…
                </div>
              )}
  
              {!loading && filteredOptions.length === 0 && (
                <CommandEmpty>No results found.</CommandEmpty>
              )}
  
              {!loading &&
                filteredOptions.map((option) => {
                  const isSelected = !!selected.find((s) => s === option.value);
  
                  return (
                    <CommandItem
                      key={option.value}
                      className="flex justify-between cursor-pointer"
                      onSelect={() => toggleSelection(option.value)}
                    >
                      {option.label}
  
                      <Checkbox checked={isSelected} />
                    </CommandItem>
                  );
                })}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }



