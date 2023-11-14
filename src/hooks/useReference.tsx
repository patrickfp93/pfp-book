import { useState, useRef, useEffect } from "react";

function useReference<T>(intial_value? : T): [React.MutableRefObject<T | null>, T | null] {
  const [componentRef, setComponentRef] = useState<T | null>(null);
  const ref = useRef<T | null>(intial_value?? null);

  useEffect(() => {
    // Atualiza o estado quando o componente é montado ou desmontado
    setComponentRef(ref.current);

    return () => {
      // Limpa a referência quando o componente é desmontado
      setComponentRef(null);
    };
  }, []);

  return [ref, componentRef];
}

export default useReference;