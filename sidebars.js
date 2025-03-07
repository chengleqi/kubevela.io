const { Component } = require('react');

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [{
        type: "doc",
        id: 'getting-started/introduction'
      }, {
        type: "category",
        collapsed: true,
        label: "Installation",
        link: {
          type: "doc",
          id: 'install'
        },
        items: [
          {
            type: "doc",
            label: "Standalone",
            id: 'installation/standalone'
          },
          {
            type: "doc",
            label: "Kubernetes",
            id: 'installation/kubernetes'
          }
        ]
      }, {
        type: "doc",
        id: 'quick-start'
      }
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: [
        'getting-started/core-concept',
        'getting-started/definition',
        'getting-started/architecture',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Container Image CD',
          collapsed: true,
          items: [
            'tutorials/webservice',
            'end-user/traits/rollout',
            'end-user/traits/sidecar',
            'tutorials/custom-image-delivery',
          ],
        },
        {
          type: 'category',
          label: 'Helm Chart CD',
          collapsed: true,
          items: ['tutorials/helm', 'tutorials/helm-rollout'],
        },
        {
          type: 'category',
          label: 'Cloud Resources CD',
          collapsed: true,
          items: [
            'tutorials/consume-cloud-services',
            {
              type: 'category',
              label: 'Terraform',
              collapsed: false,
              link: {
                type: "doc",
                id: 'end-user/components/cloud-services/cloud-resource-scenarios',
              },
              items: [
                'end-user/components/cloud-services/provision-and-consume-database',
                'end-user/components/cloud-services/provision-and-initiate-database',
                'end-user/components/cloud-services/secure-your-database-connection',
                'end-user/components/cloud-services/provision-an-RDS-instance-with-more-than-one-database',
                'end-user/components/cloud-services/provision-instance-and-database-separately',
              ],
            },
            'end-user/components/cloud-services/provision-cloud-resources-by-crossplane',
          ],
        },
        {
          type: 'category',
          label: 'Kubernetes Manifest CD',
          collapsed: true,
          items: ['tutorials/k8s-object', 'tutorials/k8s-object-rollout'],
        },
        {
          type: 'category',
          label: 'Multi Cluster Delivery',
          collapsed: true,
          items: [
            'case-studies/multi-cluster',
            'end-user/components/ref-objects',
          ],
        },
        {
          type: 'category',
          label: 'Multi Environment Delivery',
          collapsed: true,
          items: [
            'case-studies/initialize-env',
            'tutorials/multi-env'
          ],
        },
        {
          type: 'category',
          label: 'GitOps',
          collapsed: true,
          link: {
            type: "doc",
            id: 'case-studies/gitops',
          },
          items: ['end-user/gitops/fluxcd'],
        },
        {
          'CD Policies': [
            'end-user/policies/shared-resource',
            'end-user/policies/apply-once',
            'end-user/policies/gc',
          ],
        },
        {
          type: 'category',
          label: 'CI Integration',
          collapsed: true,
          link: {
            type: "doc",
            id: 'how-to/dashboard/trigger/overview',
          },
          items: [
            'tutorials/jenkins',
            'tutorials/trigger',
          ],
        },
        {
          'Day-2 Operations': [
            'tutorials/dry-run',
            'tutorials/access-application',
            'tutorials/debug-app',
            'tutorials/cloud-shell',
          ],
        },
        'end-user/version-control',
        'end-user/workflow/component-dependency-parameter',
        {
          type: 'category',
          label: 'Declarative Workflow',
          collapsed: true,
          link: {
            type: "doc",
            id: 'end-user/workflow/overview',
          },
          items: [
            'end-user/workflow/suspend',
            'end-user/workflow/step-group',
            'end-user/workflow/dependency',
            'end-user/workflow/inputs-outputs',
            'end-user/workflow/if-condition',
            'end-user/workflow/timeout',
          ],
        },
        'platform-engineers/operations/observability',
        'end-user/components/more',
      ],
    },
    {
      type: 'category',
      label: 'Operator Manual',
      items: [
        {
          'Advanced Installation': [
            'platform-engineers/system-operation/bootstrap-parameters',
            'platform-engineers/advanced-install',
            'platform-engineers/system-operation/vela-cli-image',
            'platform-engineers/system-operation/enable-addon-offline',
            'platform-engineers/system-operation/migration-from-old-version',
            'platform-engineers/system-operation/system-info-diagnose',
          ],
        },
        {
          'User Management': [
            'how-to/dashboard/user/user',
            'tutorials/sso',
            'how-to/dashboard/config/dex-connectors',
          ],
        },
        {
          'Registry Integration': [
            'how-to/dashboard/config/helm-repo',
            'how-to/dashboard/config/image-registry',
          ],
        },
        'how-to/dashboard/user/project',
        {
          'Authentication and Authorization': [
            'how-to/dashboard/user/rbac',
            'platform-engineers/auth/basic',
            'platform-engineers/auth/advance',
            'platform-engineers/auth/integration',
          ],
        },
        {
          'Cluster Management': [
            'platform-engineers/system-operation/managing-clusters',
            'how-to/dashboard/target/overview',
            'platform-engineers/system-operation/working-with-ocm',
          ],
        },
        'platform-engineers/system-operation/performance-finetuning',
        'platform-engineers/workflow/working-mechanism',
        {
          'UX Customization': [
            'platform-engineers/openapi-v3-json-schema',
            'reference/ui-schema',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsed: true,
      items: [
        'contributor/overview',
        {
          Addons: [
            'platform-engineers/addon/intro',
            'platform-engineers/addon/addon-cue',
            'platform-engineers/addon/addon-yaml',
            'reference/topology-rule',
            'platform-engineers/addon/addon-registry',
          ],
        },
        {
          'Cloud Resources': [
            'platform-engineers/addon/terraform',
            'platform-engineers/components/component-terraform',
          ],
        },
        {
          Debugging: [
            'platform-engineers/debug/dry-run',
            'platform-engineers/debug/debug',
          ],
        },
        {
          'Manage Definition with CUE': [
            'platform-engineers/cue/basic',
            'platform-engineers/cue/definition-edit',
            'platform-engineers/components/custom-component',
            'platform-engineers/traits/customize-trait',
            'platform-engineers/policy/custom-policy',
            'platform-engineers/traits/status',
            'platform-engineers/workflow/workflow',
            {
              'Patch and Override': [
                'platform-engineers/traits/patch-trait',
                'platform-engineers/cue/patch-strategy',
              ],
            },
            'platform-engineers/system-operation/velaql',
            'platform-engineers/x-def-version',
          ],
        },
        {
          'Contribution Guide': [
            'contributor/non-code-contribute',
            'contributor/code-contribute',
            'contributor/cli-ref-doc',
            'contributor/fig-auto-complete',
          ],
        },
        {
          Conventions: [
            'contributor/release-process',
            'contributor/code-conventions',
            'contributor/principle-of-test',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'References',
      items: [
        'cli/vela',
        'platform-engineers/oam/x-definition',
        'end-user/components/references',
        'end-user/traits/references',
        'end-user/policies/references',
        'end-user/workflow/built-in-workflow-defs',
        'platform-engineers/workflow/cue-actions',
        {
          type: 'category',
          label: 'Community Verified Addons',
          link: {
            type: "doc",
            id: 'reference/addons/overview'
          },
          items: [
            'reference/addons/velaux',
            'reference/addons/rollout',
            'reference/addons/fluxcd',
            {
              'Cloud Resources': [
                'reference/addons/terraform',
                'reference/addons/crossplane',
              ],
            },
            'reference/addons/ai',
            'reference/addons/traefik',
            'reference/addons/cert-manager',
            'reference/addons/kubevela-io',
            'reference/addons/pyroscope',
            'reference/addons/vegeta',
            'reference/addons/ocm-gateway-manager-addon',
            'reference/addons/ocm-hub-control-plane',
            'reference/addons/vela-prism',
            'reference/addons/flink-kubernetes-operator',
            'reference/addons/chartmuseum',
          ],
        },
        'end-user/components/cloud-services/cloud-resources-list',
        'reference/user-improvement-plan',
        'platform-engineers/openapi/overview',
      ],
    },
    'roadmap/README',
    {
      type: 'doc',
      id: 'developers/references/devex/faq',
    },
  ],
};
