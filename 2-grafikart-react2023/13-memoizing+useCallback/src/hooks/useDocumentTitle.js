import { useRef } from "react";
import { useEffect } from "react";

// Hook = renvoyer des éléments OU créer des effets de bord
// Ici, effet de bord
export function useDocumentTitle(title = '') {
  const titleRef = useRef(document.title);

  useEffect(() => {
    return () => document.title = titleRef.current;
  }, []);

  useEffect(() => {
    document.title = title ? title : titleRef.current;
  }, [title]);
}
