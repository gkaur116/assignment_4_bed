import { 
    LoanApplication, 
    loanApplications 
} from "../models/loanModel";

/**
 * Retrieves all loan applications
 * @returns Array of all loan applications
 */
export const getAllLoans = (): LoanApplication[] => {
    return loanApplications;
};

/**
 * Retrieves a single loan application by ID
 * @param id - The loan application ID
 * @returns The loan application or undefined if not found
 */
export const getLoanById = (id: number): LoanApplication | undefined => {
    return loanApplications.find((l: LoanApplication) => l.id === id);
};


/**
 * Creates a new loan application
 * @param applicant - The applicant name
 * @param amount - The loan amount
 * @returns The created loan application
 */
export const createLoan = (
    applicant: string,
    amount: number
): LoanApplication => {
    const newLoan: LoanApplication = {
        id: loanApplications.length + 1,
        applicant,
        amount,
        status: "pending",
        createdAt: new Date().toISOString(),
    };
    loanApplications.push(newLoan);
    return newLoan;
};

/**
 * Updates an existing loan application
 * @param id - The loan application ID
 * @param data - The updated data
 * @returns The updated loan application or undefined if not found
 */
export const updateLoan = (
    id: number,
    data: Partial<LoanApplication>
): LoanApplication | undefined => {
    const index: number = loanApplications.findIndex(
        (l: LoanApplication) => l.id === id
    );
    if (index === -1) {
        return undefined;
    }
    loanApplications[index] = {
        ...loanApplications[index],
        ...data,
    };
    return loanApplications[index];
};

export const deleteLoan = (id: number): boolean => {
    const index: number = loanApplications.findIndex(
        (l: LoanApplication) => l.id === id
    );
    if (index === -1) {
        return false;
    }
    loanApplications.splice(index, 1);
    return true;
};