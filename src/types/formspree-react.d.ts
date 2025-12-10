declare module '@formspree/react' {
  export interface FormState {
    submitting: boolean;
    succeeded: boolean;
    errors: {
      getFieldError: (field: string) => Array<{ code: string; message: string; field?: string }>;
      getFieldErrors: (field: string) => Array<{ code: string; message: string; field?: string }>;
      hasErrors: () => boolean;
    } | null;
  }

  export function useForm(formId: string): [FormState, (e: React.FormEvent<HTMLFormElement>) => void];
}
