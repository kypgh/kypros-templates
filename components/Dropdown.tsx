import useOnClickAway from "@/utils/hooks/useOnClickAway";
import React, { useEffect, useRef, useState, ReactNode, FC } from "react";
import styled from "styled-components";

const Outer = styled.div`
  position: relative;
  border-radius: 5px;
  padding: 5px;
`;

const Fixed = styled.div`
  position: fixed;
  max-height: 500px;
  overflow-y: auto;
`;

const DefaultDropdown: FC = () => <div>No Dropdown Passed</div>;

interface DropdownProps {
  children: ReactNode;
  DropdownComponent?: FC | ReactNode;
}

const calculatePosition = (bottom: number, right: number) => {
  const { innerHeight, innerWidth } = window;
  if (bottom > innerHeight) {
    bottom = innerHeight - 20;
  }
  if (right > innerWidth) {
    right = innerWidth - 20;
  }
  return { bottom, right };
};

const Dropdown: FC<DropdownProps> = ({
  children,
  DropdownComponent = DefaultDropdown,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const dropRef = useRef<HTMLDivElement | null>(null); // Allow the ref to be mutable

  useOnClickAway(ref, () => setIsOpen(false), [dropRef]);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Outer>
      <div ref={ref} onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>

      {isOpen && (
        <Fixed
          ref={(r) => {
            if (!r) return;
            // get the bottom and left of the button
            const { bottom, left } = ref.current!.getBoundingClientRect();

            // get the height and width of the dropdown
            const { height: dropHeight, width: dropWidth } =
              r.getBoundingClientRect();

            // calculate the bottom and right of the dropdown
            const { bottom: dropBottom, right: dropRight } = calculatePosition(
              bottom + dropHeight,
              left + dropWidth
            );

            // set the position of the dropdown
            r.style.top = `${dropBottom - dropHeight}px`;
            r.style.left = `${dropRight - dropWidth}px`;

            // set the ref
            dropRef.current = r;
          }}
        >
          {typeof DropdownComponent === "function" ? (
            <DropdownComponent />
          ) : (
            DropdownComponent
          )}
        </Fixed>
      )}
    </Outer>
  );
};

export default Dropdown;
