import { useEffect } from "react";

// Hook = renvoyer des éléments OU créer des effets de bord
// Ici, effet de bord
export function useDocumentTitle(title = '') {
  useEffect(() => {
    const originalTitle = document.title;

    return () => document.title = originalTitle
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
}
