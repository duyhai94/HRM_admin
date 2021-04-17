export enum Routes {
    LOGIN = '/login',
    HOME = '/home',
    EMPLOYEE = '/employee',
    WORKDAYS = '/workdays',
    SALARY = '/salary',
    EMAIL = '/email',
    REPORT = '/report'
}

export const RoutesLink = [
    {
        path: Routes.HOME,
        name: 'Trang chủ',
        icon: 'assets/svg/hrm-icon-home.svg'
    },
    {
        path: Routes.EMPLOYEE,
        name: 'Nhân viên',
        icon: 'assets/svg/hrm-icon-employee.svg'
    },
    {
        path: Routes.WORKDAYS,
        name: 'Công',
        icon: 'assets/svg/hrm-icon-work.svg'
    },
    {
        path: Routes.SALARY,
        name: 'Lương',
        icon: 'assets/svg/hrm-icon-salary.svg'
    },

    {
        path: Routes.EMAIL,
        name: 'Hòm thư',
        icon: 'assets/svg/hrm-icon-email.svg'
    },
    {
        path: Routes.REPORT,
        name: 'Báo cáo',
        icon: 'assets/svg/hrm-icon-report.svg'
    },

];
