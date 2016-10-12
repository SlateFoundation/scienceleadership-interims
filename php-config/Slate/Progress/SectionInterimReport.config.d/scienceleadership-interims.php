<?php

namespace Slate\Progress;

SectionInterimReport::$fields['Grade'] = [
    'type' => 'enum',
    'values' => ['A', 'B', 'C', 'D', 'F', 'N/A'],
    'default' => null
];

SectionInterimReport::$fields['NotesFormat'] = [
    'type' => 'enum',
    'values' => ['markdown', 'html'],
    'default' => 'markdown'
];