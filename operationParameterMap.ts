type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v1/ats/applications-POST': {
        parameters: [
            {
                name: 'ats_job_posting_id'
            },
            {
                name: 'source'
            },
            {
                name: 'medium'
            },
            {
                name: 'ats_candidate_id'
            },
            {
                name: 'cover_letter'
            },
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'phone'
            },
            {
                name: 'email'
            },
            {
                name: 'cv'
            },
            {
                name: 'photo'
            },
            {
                name: 'answers'
            },
        ]
    },
    '/v1/ats/applications/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'ats_application_phase_id'
            },
            {
                name: 'qualified'
            },
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'phone'
            },
            {
                name: 'email'
            },
            {
                name: 'personal_url'
            },
            {
                name: 'disqualified_reason'
            },
            {
                name: 'cv'
            },
            {
                name: 'photo'
            },
        ]
    },
    '/v2/time/attendance-POST': {
        parameters: [
            {
                name: 'employee_id'
            },
            {
                name: 'clock_in'
            },
            {
                name: 'clock_out'
            },
            {
                name: 'observations'
            },
            {
                name: 'location_type'
            },
        ]
    },
    '/v2/core/bulk/attendance-POST': {
        parameters: [
        ]
    },
    '/v2/time/attendance-GET': {
        parameters: [
            {
                name: 'employee_ids[]'
            },
            {
                name: 'date_from'
            },
            {
                name: 'date_to'
            },
        ]
    },
    '/v1/time/breaks-POST': {
        parameters: [
            {
                name: 'employee_id'
            },
            {
                name: 'break_start'
            },
            {
                name: 'break_end'
            },
            {
                name: 'observations'
            },
        ]
    },
    '/v1/time/breaks/end-POST': {
        parameters: [
            {
                name: 'now'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'observations'
            },
        ]
    },
    '/v1/time/breaks/start-POST': {
        parameters: [
            {
                name: 'now'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'observations'
            },
            {
                name: 'time_settings_break_configuration_id'
            },
        ]
    },
    '/v1/ats/candidates-POST': {
        parameters: [
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'email'
            },
            {
                name: 'source'
            },
            {
                name: 'medium'
            },
        ]
    },
    '/v1/ats/candidates/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/ats/candidates-GET': {
        parameters: [
        ]
    },
    '/v1/ats/candidates/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'email'
            },
            {
                name: 'talent_pool'
            },
            {
                name: 'consent_to_talent_pool'
            },
        ]
    },
    '/v1/payroll/compensations-POST': {
        parameters: [
            {
                name: 'contract_version_id'
            },
            {
                name: 'description'
            },
            {
                name: 'contracts_taxonomy_id'
            },
            {
                name: 'compensation_type'
            },
            {
                name: 'amount'
            },
            {
                name: 'unit'
            },
            {
                name: 'sync_with_supplements'
            },
            {
                name: 'payroll_policy_id'
            },
            {
                name: 'recurrence_count'
            },
            {
                name: 'starts_on'
            },
            {
                name: 'recurrence'
            },
            {
                name: 'first_payment_on'
            },
            {
                name: 'calculation'
            },
        ]
    },
    '/v1/payroll/compensations/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/payroll/compensations/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/payroll/compensations-GET': {
        parameters: [
            {
                name: 'ids'
            },
            {
                name: 'contract_version_ids'
            },
        ]
    },
    '/v1/payroll/compensations/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'description'
            },
            {
                name: 'contracts_taxonomy_id'
            },
            {
                name: 'compensation_type'
            },
            {
                name: 'amount'
            },
            {
                name: 'unit'
            },
            {
                name: 'sync_with_supplements'
            },
            {
                name: 'payroll_policy_id'
            },
            {
                name: 'recurrence_count'
            },
            {
                name: 'starts_on'
            },
            {
                name: 'recurrence'
            },
            {
                name: 'first_payment_on'
            },
            {
                name: 'calculation'
            },
        ]
    },
    '/v1/payroll/contract_versions/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/payroll/reference_contracts-GET': {
        parameters: [
            {
                name: 'employee_ids[]'
            },
        ]
    },
    '/v1/payroll/contract_versions/{id}-PUT': {
        parameters: [
            {
                name: 'effective_on'
            },
            {
                name: 'id'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'starts_on'
            },
            {
                name: 'ends_on'
            },
            {
                name: 'working_hours_frequency'
            },
            {
                name: 'working_week_days'
            },
            {
                name: 'working_hours'
            },
            {
                name: 'salary_frequency'
            },
            {
                name: 'salary_amount'
            },
            {
                name: 'job_title'
            },
            {
                name: 'es_cotization_group'
            },
            {
                name: 'es_professional_category_id'
            },
            {
                name: 'es_education_level_id'
            },
            {
                name: 'es_contract_type_id'
            },
        ]
    },
    '/v1/payroll/contract_versions-POST': {
        parameters: [
            {
                name: 'effective_on'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'starts_on'
            },
            {
                name: 'ends_on'
            },
            {
                name: 'working_hours_frequency'
            },
            {
                name: 'working_week_days'
            },
            {
                name: 'working_hours'
            },
            {
                name: 'salary_frequency'
            },
            {
                name: 'salary_amount'
            },
            {
                name: 'job_title'
            },
        ]
    },
    '/v1/payroll/contract_versions-GET': {
        parameters: [
        ]
    },
    '/v2/core/bulk/contract_version-POST': {
        parameters: [
        ]
    },
    '/v2/custom_fields/fields-POST': {
        parameters: [
            {
                name: 'label'
            },
            {
                name: 'slug_name'
            },
            {
                name: 'field_type'
            },
            {
                name: 'required'
            },
            {
                name: 'editable'
            },
            {
                name: 'visible'
            },
            {
                name: 'min_value'
            },
            {
                name: 'max_value'
            },
            {
                name: 'choice_options'
            },
        ]
    },
    '/v2/custom_fields/fields/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/custom_fields-GET': {
        parameters: [
            {
                name: 'field_group'
            },
        ]
    },
    '/v2/custom_fields/fields-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'label'
            },
            {
                name: 'slug_id'
            },
            {
                name: 'slug_name'
            },
        ]
    },
    '/v1/custom_fields/values-POST': {
        parameters: [
            {
                name: 'value'
            },
            {
                name: 'field_id'
            },
            {
                name: 'instance_id'
            },
        ]
    },
    '/v2/custom_fields/values-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'slug_id'
            },
            {
                name: 'field_id'
            },
            {
                name: 'slug_name'
            },
            {
                name: 'field_value'
            },
            {
                name: 'employee_ids[]'
            },
        ]
    },
    '/v1/custom_fields/values-GET': {
        parameters: [
            {
                name: 'field_id'
            },
            {
                name: 'instance_id'
            },
        ]
    },
    '/v2/custom_fields/values/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'value'
            },
        ]
    },
    '/v1/core/custom/tables-GET': {
        parameters: [
            {
                name: 'topic_name'
            },
        ]
    },
    '/v1/core/documents-POST': {
        parameters: [
            {
                name: 'filename'
            },
            {
                name: 'file'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'folder_id'
            },
            {
                name: 'request_esignature'
            },
            {
                name: 'public'
            },
            {
                name: 'signees'
            },
            {
                name: 'is_pending_assignment'
            },
        ]
    },
    '/v1/core/documents/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/documents/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/documents-GET': {
        parameters: [
            {
                name: 'employee_id'
            },
            {
                name: 'folder_id'
            },
        ]
    },
    '/v1/core/documents/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'public'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'folder_id'
            },
            {
                name: 'request_esignature'
            },
            {
                name: 'signees'
            },
        ]
    },
    '/v1/core/teams/{id}/employees/{employee_id}-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'employee_id'
            },
        ]
    },
    '/v2/core/employees/{id}/email-PUT': {
        parameters: [
            {
                name: 'email'
            },
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/custom/tables/{id}/values/{employee_id}-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'emloyee_id'
            },
            {
                name: 'id'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'table_values'
            },
        ]
    },
    '/v1/employees-POST': {
        parameters: [
            {
                name: 'email'
            },
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'birthday_on'
            },
            {
                name: 'start_date'
            },
            {
                name: 'regular_access_starts_on'
            },
            {
                name: 'manager_id'
            },
            {
                name: 'role'
            },
            {
                name: 'timeoff_manager_id'
            },
            {
                name: 'terminated_on'
            },
            {
                name: 'termination_reason'
            },
            {
                name: 'company_identifier'
            },
            {
                name: 'phone_number'
            },
        ]
    },
    '/v2/core/employees-POST': {
        parameters: [
            {
                name: 'email'
            },
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'birthday_on'
            },
            {
                name: 'role'
            },
            {
                name: 'gender'
            },
            {
                name: 'identifier'
            },
            {
                name: 'identifier_type'
            },
            {
                name: 'nationality'
            },
            {
                name: 'bank_number'
            },
            {
                name: 'country'
            },
            {
                name: 'city'
            },
            {
                name: 'state'
            },
            {
                name: 'postal_code'
            },
            {
                name: 'address_line_1'
            },
            {
                name: 'address_line_2'
            },
            {
                name: 'swift_bic'
            },
            {
                name: 'company_id'
            },
            {
                name: 'manager_id'
            },
            {
                name: 'location_id'
            },
            {
                name: 'timeoff_manager_id'
            },
            {
                name: 'legal_entity_id'
            },
            {
                name: 'company_identifier'
            },
            {
                name: 'phone_number'
            },
            {
                name: 'social_security_number'
            },
            {
                name: 'tax_id'
            },
        ]
    },
    '/v2/core/employees-GET': {
        parameters: [
            {
                name: 'full_text_name'
            },
        ]
    },
    '/v2/core/bulk/employee-POST': {
        parameters: [
        ]
    },
    '/v2/core/employees/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/payroll_integrations/codes/{id}/find_employee-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'integration'
            },
        ]
    },
    '/v1/core/custom/tables/{id}/values/{employee_id}-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'employee_id'
            },
        ]
    },
    '/v1/employees/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/employees-GET': {
        parameters: [
        ]
    },
    '/v1/time/break_configurations_for_dates-GET': {
        parameters: [
            {
                name: 'start_at'
            },
            {
                name: 'end_at'
            },
            {
                name: 'employee_id'
            },
        ]
    },
    '/v1/payroll/family_situation-GET': {
        parameters: [
            {
                name: 'employee_id'
            },
        ]
    },
    '/v2/core/employees/{id}/invite-POST': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/core/employees/{id}/terminate-POST': {
        parameters: [
            {
                name: 'terminated_on'
            },
            {
                name: 'id'
            },
            {
                name: 'termination_reason'
            },
            {
                name: 'termination_reason_type'
            },
            {
                name: 'termination_assigned_manager_id'
            },
        ]
    },
    '/v1/employees/{id}/terminate-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'terminated_on'
            },
            {
                name: 'termination_reason'
            },
            {
                name: 'termination_assigned_manager_id'
            },
        ]
    },
    '/v1/core/teams/{id}/employees/{employee_id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'employee_id'
            },
        ]
    },
    '/v1/employees/{id}/unterminate-POST': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/core/employees/{id}/unterminate-POST': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/employees/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'manager_id'
            },
            {
                name: 'role'
            },
            {
                name: 'timeoff_manager_id'
            },
            {
                name: 'company_identifier'
            },
        ]
    },
    '/v2/core/employees/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'email'
            },
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'birthday_on'
            },
            {
                name: 'role'
            },
            {
                name: 'gender'
            },
            {
                name: 'identifier'
            },
            {
                name: 'identifier_type'
            },
            {
                name: 'nationality'
            },
            {
                name: 'bank_number'
            },
            {
                name: 'country'
            },
            {
                name: 'city'
            },
            {
                name: 'state'
            },
            {
                name: 'postal_code'
            },
            {
                name: 'address_line_1'
            },
            {
                name: 'address_line_2'
            },
            {
                name: 'swift_bic'
            },
            {
                name: 'manager_id'
            },
            {
                name: 'location_id'
            },
            {
                name: 'timeoff_manager_id'
            },
            {
                name: 'phone_number'
            },
            {
                name: 'social_security_number'
            },
            {
                name: 'legal_entity_id'
            },
            {
                name: 'company_identifier'
            },
            {
                name: 'contact_name'
            },
            {
                name: 'contact_number'
            },
            {
                name: 'tax_id'
            },
        ]
    },
    '/v1/core/teams/{id}/employees/{employee_id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'lead'
            },
        ]
    },
    '/v1/core/events-GET': {
        parameters: [
        ]
    },
    '/v1/finance/expenses/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/finance/expenses-GET': {
        parameters: [
        ]
    },
    '/v1/payroll/family_situation-POST': {
        parameters: [
            {
                name: 'employee_id'
            },
            {
                name: 'civil_status'
            },
            {
                name: 'number_of_dependants'
            },
        ]
    },
    '/v1/payroll/family_situation/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'civil_status'
            },
            {
                name: 'number_of_dependants'
            },
        ]
    },
    '/v1/core/folders-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'active'
            },
        ]
    },
    '/v1/core/folders/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/folders-GET': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'active'
            },
        ]
    },
    '/v1/core/folders/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'name'
            },
            {
                name: 'active'
            },
        ]
    },
    '/v1/company_holidays-GET': {
        parameters: [
        ]
    },
    '/v1/company_holidays/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/payroll_integrations/codes/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/payroll_integrations/codes-GET': {
        parameters: [
            {
                name: 'integration'
            },
            {
                name: 'code'
            },
        ]
    },
    '/v2/payroll_integrations/codes/{id}-PATCH': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'id'
            },
            {
                name: 'code'
            },
        ]
    },
    '/v2/payroll_integrations/codes-POST': {
        parameters: [
            {
                name: 'code'
            },
            {
                name: 'codeable_id'
            },
            {
                name: 'codeable_type'
            },
            {
                name: 'integration'
            },
            {
                name: 'forfait_jours'
            },
        ]
    },
    '/v1/core/keys-POST': {
        parameters: [
            {
                name: 'name'
            },
        ]
    },
    '/v1/core/keys/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/keys-GET': {
        parameters: [
        ]
    },
    '/v1/time/leaves-POST': {
        parameters: [
            {
                name: 'start_on'
            },
            {
                name: 'finish_on'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'description'
            },
            {
                name: 'leave_type_id'
            },
            {
                name: 'half_day'
            },
        ]
    },
    '/v2/time/leaves-POST': {
        parameters: [
            {
                name: 'start_on'
            },
            {
                name: 'finish_on'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'description'
            },
            {
                name: 'leave_type_id'
            },
            {
                name: 'half_day'
            },
            {
                name: 'start_time'
            },
            {
                name: 'hours_amount_in_cents'
            },
            {
                name: 'medical_leave_type'
            },
            {
                name: 'effective_on'
            },
            {
                name: 'medical_discharge_reason'
            },
            {
                name: 'colegiate_number'
            },
            {
                name: 'has_previous_relapse'
            },
            {
                name: 'relapse_leave_id'
            },
            {
                name: 'relapse_on'
            },
            {
                name: 'accident_on'
            },
            {
                name: 'paternity_birth_on'
            },
        ]
    },
    '/v1/time/leaves/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/time/leaves/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/time/leaves/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/time/leaves/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/time/leaves-GET': {
        parameters: [
            {
                name: 'employee_ids[]'
            },
            {
                name: 'leave_type_ids[]'
            },
            {
                name: 'from'
            },
            {
                name: 'to'
            },
            {
                name: 'include_leave_type'
            },
        ]
    },
    '/v2/time/leaves-GET': {
        parameters: [
            {
                name: 'employee_ids[]'
            },
            {
                name: 'leave_type_ids[]'
            },
            {
                name: 'from'
            },
            {
                name: 'to'
            },
            {
                name: 'include_leave_type'
            },
        ]
    },
    '/v1/time/leave_types-GET': {
        parameters: [
        ]
    },
    '/v1/time/leave_types-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'color'
            },
            {
                name: 'accrues'
            },
            {
                name: 'active'
            },
            {
                name: 'approval_required'
            },
            {
                name: 'attachment'
            },
            {
                name: 'visibility'
            },
            {
                name: 'workable'
            },
        ]
    },
    '/v2/time/leaves/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'description'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'finish_on'
            },
            {
                name: 'start_on'
            },
            {
                name: 'start_time'
            },
            {
                name: 'hour_amount_in_cents'
            },
        ]
    },
    '/v1/time/leaves/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'description'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'finish_on'
            },
            {
                name: 'start_on'
            },
            {
                name: 'half_day'
            },
            {
                name: 'leave_type_id'
            },
        ]
    },
    '/v1/time/leave_types/{id}-PUT': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'color'
            },
            {
                name: 'id'
            },
            {
                name: 'accrues'
            },
            {
                name: 'active'
            },
            {
                name: 'approval_required'
            },
            {
                name: 'attachment'
            },
            {
                name: 'visibility'
            },
            {
                name: 'workable'
            },
        ]
    },
    '/v1/core/legal_entities/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/legal_entities-GET': {
        parameters: [
        ]
    },
    '/v1/locations-GET': {
        parameters: [
        ]
    },
    '/v1/locations/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/time/shifts_management/{id}/locations-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'location_id'
            },
            {
                name: 'work_area_id'
            },
        ]
    },
    '/v1/ats/messages-POST': {
        parameters: [
            {
                name: 'job_application_id'
            },
            {
                name: 'content'
            },
        ]
    },
    '/v1/ats/messages-GET': {
        parameters: [
            {
                name: 'conversation_id'
            },
        ]
    },
    '/v1/time/policies/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/time/policies-GET': {
        parameters: [
        ]
    },
    '/v1/ats/job_postings-POST': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'status'
            },
            {
                name: 'description'
            },
            {
                name: 'contract_type'
            },
            {
                name: 'remote'
            },
            {
                name: 'schedule_type'
            },
            {
                name: 'team_id'
            },
            {
                name: 'location_id'
            },
            {
                name: 'salary_format'
            },
            {
                name: 'salary_from_amount_in_cents'
            },
            {
                name: 'salary_to_amount_in_cents'
            },
            {
                name: 'cv_requirement'
            },
            {
                name: 'cover_letter_requirement'
            },
            {
                name: 'phone_requirement'
            },
            {
                name: 'photo_requirement'
            },
        ]
    },
    '/v1/posts-POST': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'description'
            },
            {
                name: 'posts_group_id'
            },
            {
                name: 'type'
            },
            {
                name: 'published_at'
            },
            {
                name: 'stars_at'
            },
            {
                name: 'ends_at'
            },
            {
                name: 'location'
            },
            {
                name: 'target_id'
            },
            {
                name: 'send_notifications'
            },
            {
                name: 'image'
            },
            {
                name: 'allow_comments_and_reactions'
            },
            {
                name: 'attachments'
            },
        ]
    },
    '/v1/ats/job_postings/{id}/duplicate-POST': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/ats/job_postings-GET': {
        parameters: [
            {
                name: 'status'
            },
            {
                name: 'team_id'
            },
            {
                name: 'location_id'
            },
            {
                name: 'legal_entity_id'
            },
        ]
    },
    '/v1/posts/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/ats/job_postings/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'title'
            },
            {
                name: 'description'
            },
            {
                name: 'contract_type'
            },
            {
                name: 'remote'
            },
            {
                name: 'status'
            },
            {
                name: 'schedule_type'
            },
            {
                name: 'team_id'
            },
            {
                name: 'location_id'
            },
            {
                name: 'salary_format'
            },
            {
                name: 'salary_from_amount_in_cents'
            },
            {
                name: 'salary_to_amount_in_cents'
            },
            {
                name: 'cv_requirement'
            },
            {
                name: 'cover_letter_requirement'
            },
            {
                name: 'phone_requirement'
            },
            {
                name: 'photo_requirement'
            },
        ]
    },
    '/v1/posts-GET': {
        parameters: [
        ]
    },
    '/v1/ats/job_postings/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/posts/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/posts/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'id'
            },
            {
                name: 'title'
            },
            {
                name: 'description'
            },
            {
                name: 'stars_at'
            },
            {
                name: 'location'
            },
            {
                name: 'send_notifications'
            },
            {
                name: 'delete_cover_image'
            },
            {
                name: 'image'
            },
            {
                name: 'allow_comments_and_reactions'
            },
            {
                name: 'attachments'
            },
            {
                name: 'deleted_attachments'
            },
        ]
    },
    '/v1/time/shifts/clock_in-POST': {
        parameters: [
            {
                name: 'employee_id'
            },
            {
                name: 'now'
            },
            {
                name: 'observations'
            },
            {
                name: 'location_type'
            },
        ]
    },
    '/v1/time/shifts_management-POST': {
        parameters: [
            {
                name: 'start_at'
            },
            {
                name: 'end_at'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'notes'
            },
            {
                name: 'location_id'
            },
            {
                name: 'work_area_id'
            },
        ]
    },
    '/v1/time/shifts_management/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/time/shifts/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/time/shifts_management-GET': {
        parameters: [
            {
                name: 'employee_id'
            },
            {
                name: 'employee_ids%5B%5D'
            },
            {
                name: 'start_at'
            },
            {
                name: 'end_at'
            },
            {
                name: 'only_published'
            },
        ]
    },
    '/v1/time/shifts_management/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/time/shifts-GET': {
        parameters: [
            {
                name: 'year'
            },
            {
                name: 'month'
            },
        ]
    },
    '/v1/time/shifts_management/publish-POST': {
        parameters: [
            {
                name: 'start_at'
            },
            {
                name: 'end_at'
            },
            {
                name: 'employee_ids'
            },
            {
                name: 'send_notification'
            },
        ]
    },
    '/v1/time/shifts/toggle-POST': {
        parameters: [
            {
                name: 'employee_id'
            },
            {
                name: 'now'
            },
        ]
    },
    '/v1/time/shifts/clock_out-POST': {
        parameters: [
            {
                name: 'employee_id'
            },
            {
                name: 'now'
            },
            {
                name: 'observations'
            },
        ]
    },
    '/v1/time/shifts_management/{id}/notes-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'notes'
            },
        ]
    },
    '/v1/time/shifts/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'clock_in'
            },
            {
                name: 'clock_out'
            },
            {
                name: 'observations'
            },
        ]
    },
    '/v1/payroll/supplements-POST': {
        parameters: [
            {
                name: 'employee_id'
            },
            {
                name: 'amount_in_cents'
            },
            {
                name: 'effective_on'
            },
            {
                name: 'contracts_taxonomy_id'
            },
            {
                name: 'payroll_policy_period_id'
            },
            {
                name: 'unit'
            },
            {
                name: 'contracts_compensation_id'
            },
        ]
    },
    '/v1/payroll/supplements/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/payroll/supplements-GET': {
        parameters: [
        ]
    },
    '/v1/payroll/supplements/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'employee_id'
            },
            {
                name: 'amount_in_cents'
            },
            {
                name: 'effective_on'
            },
            {
                name: 'contracts_taxonomy_id'
            },
            {
                name: 'payroll_policy_period_id'
            },
            {
                name: 'unit'
            },
            {
                name: 'contracts_compensation_id'
            },
        ]
    },
    '/v1/core/custom/tables-POST': {
        parameters: [
            {
                name: 'name'
            },
        ]
    },
    '/v1/core/custom/tables/{id}/fields-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'id'
            },
            {
                name: 'custom_field'
            },
        ]
    },
    '/v1/core/custom/tables/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/custom/tables/{id}/fields-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/tasks/{id}/files-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'file'
            },
        ]
    },
    '/v1/core/tasks/{id}/copy-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'name'
            },
        ]
    },
    '/v1/core/tasks-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'due_on'
            },
            {
                name: 'content'
            },
            {
                name: 'assignee_ids'
            },
        ]
    },
    '/v1/core/tasks/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/tasks/{task_id}/files/{id}-POST': {
        parameters: [
            {
                name: 'task_id'
            },
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/tasks-GET': {
        parameters: [
            {
                name: 'assignee_id'
            },
        ]
    },
    '/v1/core/tasks/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/tasks/{task_id}/files/{id}-GET': {
        parameters: [
            {
                name: 'task_id'
            },
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/tasks/{id}/files-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/tasks/{id}/resolve-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'done'
            },
        ]
    },
    '/v1/core/tasks/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'due_on'
            },
            {
                name: 'name'
            },
            {
                name: 'content'
            },
            {
                name: 'assignee_ids'
            },
        ]
    },
    '/v1/payroll/taxonomies/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/payroll/taxonomies-GET': {
        parameters: [
            {
                name: 'ids'
            },
            {
                name: 'legal_entity_ids'
            },
        ]
    },
    '/v1/core/teams-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'description'
            },
        ]
    },
    '/v1/core/teams-GET': {
        parameters: [
        ]
    },
    '/v1/core/teams/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/teams/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/teams/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'description'
            },
            {
                name: 'name'
            },
            {
                name: 'avatar'
            },
        ]
    },
    '/v1/me-GET': {
        parameters: [
        ]
    },
    '/v2/core/webhooks-GET': {
        parameters: [
        ]
    },
    '/v1/core/webhooks-GET': {
        parameters: [
        ]
    },
    '/v1/core/webhooks-POST': {
        parameters: [
            {
                name: 'type'
            },
            {
                name: 'target_url'
            },
        ]
    },
    '/v2/core/webhooks/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/core/webhooks/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/core/webhooks-POST': {
        parameters: [
            {
                name: 'subscription_type'
            },
            {
                name: 'target_url'
            },
            {
                name: 'name'
            },
            {
                name: 'challenge'
            },
        ]
    },
    '/v2/core/webhooks/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'target_url'
            },
            {
                name: 'name'
            },
            {
                name: 'challenge'
            },
        ]
    },
    '/v2/core/workplaces-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'country'
            },
            {
                name: 'timezone'
            },
            {
                name: 'state'
            },
            {
                name: 'city'
            },
            {
                name: 'address_line_1'
            },
            {
                name: 'address_line_2'
            },
            {
                name: 'postal_code'
            },
            {
                name: 'phone_number'
            },
            {
                name: 'company_id'
            },
            {
                name: 'legal_entity_id'
            },
            {
                name: 'main'
            },
            {
                name: 'latitude'
            },
            {
                name: 'longitude'
            },
        ]
    },
    '/v2/core/workplaces/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/core/workplaces-GET': {
        parameters: [
            {
                name: 'ids'
            },
            {
                name: 'employee_ids'
            },
        ]
    },
    '/v2/core/workplaces/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v2/core/workplaces/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'name'
            },
            {
                name: 'country'
            },
            {
                name: 'state'
            },
            {
                name: 'city'
            },
            {
                name: 'address_line_1'
            },
            {
                name: 'address_line_2'
            },
            {
                name: 'postal_code'
            },
            {
                name: 'phone_number'
            },
            {
                name: 'payroll_policy_id'
            },
            {
                name: 'main'
            },
            {
                name: 'timezone'
            },
        ]
    },
}