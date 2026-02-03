

## Update 3D Logos Option in Sign Type Modal

### What You Want
Change the "3D Logos" option in the popup modal to:
- **Label**: "3D Layered Signs"
- **Description**: "For logos/more complicated designs in a round, square or any shape"

### File to Modify

**`src/components/Navigation.tsx`** - Line 22

### Change

| Current | Updated |
|---------|---------|
| `label: "3D Logos"` | `label: "3D Layered Signs"` |
| `description: "Dimensional logos for your brand"` | `description: "For logos/more complicated designs in a round, square or any shape"` |

This is a simple text change in the `signTypeOptions` array - everything else stays the same.

