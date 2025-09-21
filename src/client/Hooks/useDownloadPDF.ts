import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useCallback } from 'react';

const useDownloadPDF = () => {
  const downloadPDF = useCallback(
    async (ref: HTMLElement | null, fileName: string = 'document.pdf') => {
      if (!ref) {
        console.error('Reference to the element is null');
        return;
      }

      try {
        const canvas = await html2canvas(ref, {
          scale: 4,
          useCORS: true,
        });

        const imgData = canvas.toDataURL('image/webp');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(fileName);
      } catch (error) {
        console.error('Error generating PDF:', error);
      }
    },
    []
  );

  return { downloadPDF };
};

export default useDownloadPDF;
